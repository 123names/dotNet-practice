using Microsoft.EntityFrameworkCore;

using API.Entities;
namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<AppOrder>()
            .HasOne(user=>user.User)
            .WithMany(order=>order.User_Prod)
            .HasForeignKey(ui => ui.userId);

            modelBuilder.Entity<AppOrder>()
            .HasOne(prod=>prod.Product)
            .WithMany(order=>order.Prod_User)
            .HasForeignKey(pi => pi.productId);
        }

        public DbSet<AppUser> Users{get; set;}
        public DbSet<AppProduct> Products{get; set;}
        public DbSet<AppOrder> Orders {get; set;}
    }
}