using System.Collections.Generic;
using System.Threading.Tasks;
using movies_api.Entities;

namespace movies_api.Services
{
    public interface IRepository   {
        List<Genres> GetAllGenres();
        Task<List<Genres>> GetAllGenresAsync();
        Genres GetGenreById(int id);
    }
}    
