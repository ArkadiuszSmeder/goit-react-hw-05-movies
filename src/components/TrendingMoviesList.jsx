import React, { useState } from 'react';
import { getTrendingFilms } from "utils/getTrendingFilms";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";

export const TrendingMoviesList = () => {
  const location = useLocation();
  const [trendingFilmsList, setTrendingFilmsList] = useState([])

  useQuery({
    queryKey: ['trending-films'],
    queryFn: () => getTrendingFilms(),
    onSuccess: (trendingFilms) => {
      setTrendingFilmsList(trendingFilms.results)
      console.log(trendingFilms)
    }
  });

  return (
      <ul>
        {trendingFilmsList.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
  );
};