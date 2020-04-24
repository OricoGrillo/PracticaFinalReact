using Dominio;
using Microsoft.EntityFrameworkCore;

namespace Persistencia
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Pelicula> Peliculas
        {
            get;
            set;
        }
        
    }
}