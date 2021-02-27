using System.Collections.Generic;
using System.Threading.Tasks;
using movies_api.Entities;

namespace movies_api.Services
{
    public interface IRepository   {
        List<Genre> GetAllGenres();
        Task<List<Genre>> GetAllGenresAsync();
        Genre GetGenreById(int id);
        Task<Genre> GetGenreByIdAsync(int id);
    }
}    
