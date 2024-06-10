import { useParams, useLocation, Outlet, Link } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import React, { useState, Suspense } from 'react';
import { useQuery } from "react-query";


const MovieDetails = () => {

  const { movieId } = useParams(); // używa parametru movieId do wyszukiwania w funkcji getMovieById - zaszyty w App i Home
  // const navigate = useNavigate();

  const getMovieById = async () => {

    const query = `https://api.themoviedb.org/3/movie/${movieId}?api_key=fcef3f7d90b41f3f85ee0cce371ea367`
    const response = await fetch(query)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

  const [movieDetails, setMovieDetails] = useState(null) // hook do przechowywania informacji o filmie

  useQuery({
    queryKey: ['movie-details', movieId],
    queryFn: () => getMovieById(),
    onSuccess: (movieDetails) => {
      setMovieDetails(movieDetails)
      // console.log(movieDetails)
    }
  });

  const location = useLocation();
  let backLinkHref = location.state?.from ?? "/movies"; //powrót w zależności od ściezki
  console.log(location.state)

  return (
    <main>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {movieDetails && (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt={movieDetails.title}
                style={{ minWidth: '270px', maxWidth: '270px' }}
              />
            </div>
            )}
        {movieDetails && (
          <div style={{ marginLeft: '20px' }}>
            <h1>{movieDetails.title} ({movieDetails.release_date.slice(0,4)})</h1>
            <p>User score: {Math.round((movieDetails.vote_average) * 10)}%</p>
            <h2>Overwiew</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
          </div>
        )}
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;


/* <button onClick={() => navigate(-1)}>
Go Back
</button> */
// button cofający