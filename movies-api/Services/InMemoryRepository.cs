using movies_api.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace movies_api.Services
{

    public class InMemoryRepository : IRepository
    {
        private List<Genre> _genres;
        public InMemoryRepository() => _genres = new List<Genre>(){
                new Genre(){Id=1, Name = "Comdey"},
                new Genre(){Id=2,Name="Action"}
            };

        public List<Genre> GetAllGenres() => _genres;

        public async Task<List<Genre>> GetAllGenresAsync()
        {
            await Task.Delay(0);
            return _genres;
        }

        public Genre GetGenreById(int id)
        {
            return _genres.Find(x => x.Id == id);
        }

        public async Task<Genre> GetGenreByIdAsync(int id)
        {
            await Task.Delay(0);
            return _genres.Find(x => x.Id == id);

        }
    }

}
