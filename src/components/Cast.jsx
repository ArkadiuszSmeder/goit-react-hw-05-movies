import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { useQuery } from "react-query";

const Cast = () => {

  const { movieId } = useParams(); // używa parametru movieId do wyszukiwania w funkcji getMovieById - zaszyty w App i Home

  const getMovieCast = async () => {

    const query = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fcef3f7d90b41f3f85ee0cce371ea367`
    const response = await fetch(query)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

  const [movieCast, setMovieCast] = useState([]) // hook do przechowywania informacji o obsadzie

  useQuery({
    queryKey: ['movie-cast', movieId],
    queryFn: () => getMovieCast(),
    onSuccess: (movieCast) => {
      setMovieCast(movieCast.cast)
      console.log(movieCast.cast)
    }
  });

    return (
      <section>
        <h2>Cast</h2>
        <ul>
        {movieCast.map(actor => (
          <li key={actor.id} style={{ marginBottom: '25px' }}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                style={{ minWidth: '150px', maxWidth: '150px' }}
              />
            </div>
            <div>{actor.name}</div>
            <div>Character: {actor.character}</div>
          </li>
        ))}
      </ul>
      </section>
    );
  };
  
  export default Cast;