export const getTrendingFilms = async () => {

    const query = `https://api.themoviedb.org/3/trending/movie/day?api_key=fcef3f7d90b41f3f85ee0cce371ea367`
    const response = await fetch(query)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }
