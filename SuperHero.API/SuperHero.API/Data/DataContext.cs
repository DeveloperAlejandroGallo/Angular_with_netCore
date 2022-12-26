using Microsoft.EntityFrameworkCore;

namespace SuperHero.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        //Declaro las  tablas
        public DbSet<SuperHero> SuperHeroes { get; set; } 


    }
}
