using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Sheduler.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Groups",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Title = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Email = table.Column<string>(type: "text", nullable: true),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    Patronymic = table.Column<string>(type: "text", nullable: true),
                    GroupID = table.Column<int>(type: "integer", nullable: true),
                    PasswordHash = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Groups_GroupID",
                        column: x => x.GroupID,
                        principalTable: "Groups",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Groups",
                columns: new[] { "Id", "Title" },
                values: new object[,]
                {
                    { 1, "IK" },
                    { 2, "KE" },
                    { 3, "IB" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "FirstName", "GroupID", "LastName", "PasswordHash", "Patronymic" },
                values: new object[,]
                {
                    { 1, "marcel@barton.co.uk", "Ludie", 1, "Bashirian", "cjHXBrPBpkyq4gc8e03naqgse0IUwihIvkBbQw6lQhY=", null },
                    { 2, "polly@wittingbeatty.co.uk", "Sofia", 1, "Smitham", "+a+vL7Y9b4EJZo3PxgjLCQpF1IzJdoHDkIc8ukX6st8=", null },
                    { 3, "arnaldo_lehner@ratke.biz", "Tabitha", 1, "Kirlin", "V5lxTW8a6C+7WKzi03cNLylgOOKo4Mp3Y7OM+dlTNDQ=", null },
                    { 4, "willow.nienow@mertz.ca", "Orpha", 1, "Olson", "M5BBb0QIUksOxJM240RvnTbRMOh0IDiygw8Xlwwdd/M=", null },
                    { 5, "mozelle@maggiorolfson.us", "Orrin", 1, "Okuneva", "Hfi45tmsE6g7EmZGMD2PmJfaQQFR8laxIQi/N33CMe8=", null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_GroupID",
                table: "Users",
                column: "GroupID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Groups");
        }
    }
}
