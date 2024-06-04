using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project305.Migrations
{
    /// <inheritdoc />
    public partial class AddConsult : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RegisterLog");

            migrationBuilder.CreateTable(
                name: "InforConsult",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DoctorId = table.Column<int>(type: "int", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    Appointment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Fee = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InforConsult", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RequestConsult",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    DoctorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestConsult", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InforConsult");

            migrationBuilder.DropTable(
                name: "RequestConsult");

            migrationBuilder.CreateTable(
                name: "RegisterLog",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegisterLog", x => x.Id);
                });
        }
    }
}
