using Sheduler.Data;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication;
using Sheduler.Services;
using Sheduler.MigrationManager;

var builder = WebApplication.CreateBuilder(args);

//add config file
{
    builder.Configuration.AddIniFile("config.ini",
        optional: true,
        reloadOnChange: true);

    builder.Configuration.AddEnvironmentVariables();
}

// add services to DI container
{
    var services = builder.Services;
    var env = builder.Environment;

    services.AddDbContext<ShedulerContext>();
    services.AddCors();
    services.AddControllers().AddJsonOptions(x =>
    {
        // serialize enums as strings in api responses (e.g. Role)
        x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

        // ignore omitted parameters on models to enable optional params (e.g. User update)
        x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    });
    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

    // configure DI for application services
    services.AddScoped<IUserService, UserService>();
}



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    // global cors policy
    app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

}

app.UseHsts();
// app.UseHttpsRedirection();


app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MigrateDatabase();

app.Run("http://localhost:4000");
