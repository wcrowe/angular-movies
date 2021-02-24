using movies_api.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace movies_api.Services
{

    public class InMemoryRepository : IRepository
    {
        private List<Genres> _genres;
        public InMemoryRepository() => _genres = new List<Genres>(){
                new Genres(){Id=1, Name = "Comdey"},
                new Genres(){Id=2,Name="Action"}
            };

        public List<Genres> GetAllGenres() => _genres;

        public async Task<List<Genres>> GetAllGenresAsync()
        {
            await Task.Delay(0);
            return _genres;
        }

        Genres IRepository.GetGenreById(int id)
        {
          return _genres.Find(x => x.Id == id);
        }
    }
    
}
