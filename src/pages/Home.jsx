import React, { useState } from 'react';
import { getTrendingFilms } from "utils/getTrendingFilms";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
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
    <main>
      <h1>Trending Today</h1>
      <ul>
        {trendingFilmsList.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;


//================================================================
// import React from 'react';
// import { TrendingMoviesList } from 'components/TrendingMoviesList';


// const Home = () => {

//   return (
//     <main>
//       <h1>Trending Today</h1>
//       <TrendingMoviesList />
//     </main>
//   );
// };

// export default Home;
