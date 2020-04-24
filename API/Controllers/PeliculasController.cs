using System.Collections.Generic;
using System.Linq;
using Dominio;
using Microsoft.AspNetCore.Mvc;
using Persistencia;

namespace API.Controllers
{
    public class PeliculasController : Controller
    {
        // Se crea instancia de la clase DataContext.
        private readonly DataContext _data;
        public PeliculasController(DataContext data)
        {
            _data = data;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public ActionResult<IEnumerable<Pelicula>> GetPeliculas()
        {
            var Peliculas = _data.Peliculas.ToList();
            return Ok(Peliculas);
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public ActionResult<Pelicula> GetPelicula(int id)
        {
            // var Categoria = _service.GetById(id);
            
            // if(Categoria != null)
            // {
            //     return Ok(Categoria);
            // }

            return NotFound();
        }

        [HttpPost]
        [Route("api/[controller]")]
        public ActionResult CrearCategoria([FromBody] Pelicula pelicula)
        {
            _data.Peliculas.Add(pelicula);
            _data.SaveChanges();
            return Ok(pelicula);        
        }

        [HttpPut]
        [Route("api/[controller]")]
        public ActionResult UpdateCategoria([FromBody] Pelicula pelicula)
        {
            _data.Peliculas.Update(pelicula);
            _data.SaveChanges();
            return Ok(pelicula);        
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public ActionResult DeleteCategoria(int id)
        {
            var pelicula = new Pelicula { Id = id };
            _data.Peliculas.Remove(pelicula);
            _data.SaveChanges();

            return Ok(pelicula);        
        }
    }
}