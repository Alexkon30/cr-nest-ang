namespace Sheduler.Data;

using Microsoft.EntityFrameworkCore;
using Sheduler.Entities;
using BCrypt.Net;

public class ShedulerContext : DbContext

{
  protected readonly IConfiguration Configuration;

  public ShedulerContext(IConfiguration configuration)
  {
    Configuration = configuration;
  }

  public DbSet<User> Users { get; set; }
  public DbSet<Group> Groups { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<User>().ToTable("Users");
    modelBuilder.Entity<Group>().ToTable("Groups");

    #region Groups
    modelBuilder.Entity<Group>().HasData(new Group { Id = 1, Title = "IK" });
    modelBuilder.Entity<Group>().HasData(new Group { Id = 2, Title = "KE" });
    modelBuilder.Entity<Group>().HasData(new Group { Id = 3, Title = "IB" });
    #endregion


    #region Students
    for (int i = 0; i < 5; i++)
    {
      modelBuilder.Entity<User>().HasData(
          new User
          {
            Id = i + 1,
            FirstName = Faker.Name.First(),
            LastName = Faker.Name.Last(),
            Email = Faker.Internet.Email(),
            PasswordHash = BCrypt.HashPassword("Password"),
            GroupID = 1
          });
    }
    #endregion
  }

  protected override void OnConfiguring(DbContextOptionsBuilder options)
  {
    // connect to postgres with connection string from app settings
    string connection = $"Host={Configuration["DB_SETTINGS:HOST"]}; " + 
                        $"Port={Configuration["DB_SETTINGS:PORT"]}; " +
                        $"Database={Configuration["DB_SETTINGS:DATABASE"]}; " +
                        $"Username={Configuration["DB_SETTINGS:USERNAME"]}; " +
                        $"Password={Configuration["DB_SETTINGS:PASSWORD"]};";
    options.UseNpgsql(connection);
  }
}