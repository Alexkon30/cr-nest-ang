﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Sheduler.Data;

#nullable disable

namespace Sheduler.Migrations
{
    [DbContext(typeof(ShedulerContext))]
    [Migration("20230917204426_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Sheduler.Entities.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Groups", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Title = "IK"
                        },
                        new
                        {
                            Id = 2,
                            Title = "KE"
                        },
                        new
                        {
                            Id = 3,
                            Title = "IB"
                        });
                });

            modelBuilder.Entity("Sheduler.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<int?>("GroupID")
                        .HasColumnType("integer");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("Patronymic")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("GroupID");

                    b.ToTable("Users", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "marcel@barton.co.uk",
                            FirstName = "Ludie",
                            GroupID = 1,
                            LastName = "Bashirian",
                            PasswordHash = "cjHXBrPBpkyq4gc8e03naqgse0IUwihIvkBbQw6lQhY="
                        },
                        new
                        {
                            Id = 2,
                            Email = "polly@wittingbeatty.co.uk",
                            FirstName = "Sofia",
                            GroupID = 1,
                            LastName = "Smitham",
                            PasswordHash = "+a+vL7Y9b4EJZo3PxgjLCQpF1IzJdoHDkIc8ukX6st8="
                        },
                        new
                        {
                            Id = 3,
                            Email = "arnaldo_lehner@ratke.biz",
                            FirstName = "Tabitha",
                            GroupID = 1,
                            LastName = "Kirlin",
                            PasswordHash = "V5lxTW8a6C+7WKzi03cNLylgOOKo4Mp3Y7OM+dlTNDQ="
                        },
                        new
                        {
                            Id = 4,
                            Email = "willow.nienow@mertz.ca",
                            FirstName = "Orpha",
                            GroupID = 1,
                            LastName = "Olson",
                            PasswordHash = "M5BBb0QIUksOxJM240RvnTbRMOh0IDiygw8Xlwwdd/M="
                        },
                        new
                        {
                            Id = 5,
                            Email = "mozelle@maggiorolfson.us",
                            FirstName = "Orrin",
                            GroupID = 1,
                            LastName = "Okuneva",
                            PasswordHash = "Hfi45tmsE6g7EmZGMD2PmJfaQQFR8laxIQi/N33CMe8="
                        });
                });

            modelBuilder.Entity("Sheduler.Entities.User", b =>
                {
                    b.HasOne("Sheduler.Entities.Group", "Group")
                        .WithMany("Students")
                        .HasForeignKey("GroupID");

                    b.Navigation("Group");
                });

            modelBuilder.Entity("Sheduler.Entities.Group", b =>
                {
                    b.Navigation("Students");
                });
#pragma warning restore 612, 618
        }
    }
}
