import { useSearchParams, Link } from "react-router-dom";
import { SearchBox } from "../components/SearchBox";
import React, { useState, useEffect } from 'react';
import { useQuery } from "react-query";

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams(); // hook do przechowywania zmiennych wyszukiwania 
  const movieName = searchParams.get("query") ?? ""; // zmienna movieName pobrana z searchParams i uzywana w getMovieByName


  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  }; // funkcja do obsługi imputa i zmiany wartości search params

  const getMovieByName = async () => {

    const query = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=fcef3f7d90b41f3f85ee0cce371ea367`
    const response = await fetch(query)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

  const [movieList, setMovieList] = useState([]) //hook do przechowywania obiekty wyszukowanych filmów

  const { refetch } = useQuery({
    queryKey: ['movie-list'],
    queryFn: () => getMovieByName(),
    enabled: false,
    onSuccess: (movieList) => {
      setMovieList(movieList.results)
      console.log(movieList)
      console.log(movieList.results.length)
    }
  }); //przeładowuje obiekt w zalożności od wprowadzonego słowa wyszukiwania movieName

  const handleSearch = () => {
    refetch();
  }; // wyszukuje filmu po kliknieciu na przycisk

  useEffect(() => {
    if (movieName) {
      refetch();
    }
  }, [movieName, refetch]); //zwraca liste filmów przy cofnięciu do poprzedniej strony - pusta tablica dependencies

  return (
    <main>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <button onClick={handleSearch}>Search</button>
      <div>
        {movieList && movieList.length > 0 ? (
          <ul>
            {movieList.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{from: `/movies?query=${movieName}`}}>
                {movie.original_title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </main>
  );
};

export default Movies;


// import { useSearchParams } from "react-router-dom";

// export const Movies = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const name = searchParams.get("name");

//   return (
//     <div>
//       <input type="text" value={name} onChange={e => setSearchParams({ name: e.target.value })}/>
//     </div>
//   );
// };

// export default Movies;



//========================================================== do movieList tak było

// useQuery({
//   queryKey: ['movie-list'],
//   queryFn: () => getMovieByName(),
//   onSuccess: (movieList) => {
//     setMovieList(movieList)
//     console.log(movieList)
//   }
// });

// return (
//   <main>
//     <SearchBox value={movietName} onChange={updateQueryString} />
//     <button>Search</button>
//     <div>
//       <h2>Filmiki</h2>
//     </div>
//   </main>
// );
// };