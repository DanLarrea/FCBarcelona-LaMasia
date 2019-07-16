﻿// <auto-generated />
using System;
using FCB_LaMasia.Lib.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FCBLaMasia.Web.Migrations
{
    [DbContext(typeof(LaMasiaDBContext))]
    partial class LaMasiaDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FCB_LaMasia.Lib.Team", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code");

                    b.Property<Guid?>("ManagerId");

                    b.Property<string>("Venue");

                    b.HasKey("Id");

                    b.HasIndex("ManagerId");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("FCB_LaMasia.Lib.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Age");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Email");

                    b.Property<string>("Lastname");

                    b.Property<string>("Name");

                    b.Property<string>("Nationality");

                    b.Property<string>("Password");

                    b.Property<string>("Token");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasDiscriminator<string>("Discriminator").HasValue("User");
                });

            modelBuilder.Entity("FCB_LaMasia.Lib.Coach", b =>
                {
                    b.HasBaseType("FCB_LaMasia.Lib.User");

                    b.Property<Guid>("TeamId");

                    b.HasIndex("TeamId")
                        .IsUnique()
                        .HasFilter("[TeamId] IS NOT NULL");

                    b.ToTable("Coach");

                    b.HasDiscriminator().HasValue("Coach");
                });

            modelBuilder.Entity("FCB_LaMasia.Lib.Manager", b =>
                {
                    b.HasBaseType("FCB_LaMasia.Lib.User");


                    b.ToTable("Manager");

                    b.HasDiscriminator().HasValue("Manager");
                });

            modelBuilder.Entity("FCB_LaMasia.Lib.Player", b =>
                {
                    b.HasBaseType("FCB_LaMasia.Lib.User");

                    b.Property<float>("Height");

                    b.Property<Guid>("TeamId")
                        .HasColumnName("Player_TeamId");

                    b.Property<float>("Weight");

                    b.HasIndex("TeamId");

                    b.ToTable("Player");

                    b.HasDiscriminator().HasValue("Player");
                });

            modelBuilder.Entity("FCB_LaMasia.Lib.Team", b =>
                {
                    b.HasOne("FCB_LaMasia.Lib.Manager", "Manager")
                        .WithMany("Teams")
                        .HasForeignKey("ManagerId");
                });

            modelBuilder.Entity("FCB_LaMasia.Lib.Coach", b =>
                {
                    b.HasOne("FCB_LaMasia.Lib.Team", "Team")
                        .WithOne("Coach")
                        .HasForeignKey("FCB_LaMasia.Lib.Coach", "TeamId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FCB_LaMasia.Lib.Player", b =>
                {
                    b.HasOne("FCB_LaMasia.Lib.Team", "Team")
                        .WithMany("Players")
                        .HasForeignKey("TeamId")
                        .OnDelete(DeleteBehavior.SetNull);
                });
#pragma warning restore 612, 618
        }
    }
}
