namespace Sheduler.MigrationManager;

using Microsoft.EntityFrameworkCore;
using Sheduler.Data;

public static class MigrationManager
{
  public static WebApplication MigrateDatabase(this WebApplication webApp)
  {
    using (var scope = webApp.Services.CreateScope())
    {
      using var appContext = scope.ServiceProvider.GetRequiredService<ShedulerContext>();
      appContext.Database.Migrate();
    }
    return webApp;
  }
}