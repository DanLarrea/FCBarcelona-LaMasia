//using FCB_LaMasia.Lib.Models.Relations;
using Microsoft.EntityFrameworkCore;
using System;


namespace FCB_LaMasia.Lib.DAL
{
    public class LaMasiaDBContext : DbContext
    {
        public LaMasiaDBContext(DbContextOptions<LaMasiaDBContext> options) : base(options)
        {
        }
        public DbSet<Manager> Managers { get; set; }
        public DbSet<Coach> Coaches { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Team> Teams { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>()
                .HasOne(b => b.Team)
                .WithMany(a => a.Players)
                .OnDelete(DeleteBehavior.SetNull);
        }

    }
}