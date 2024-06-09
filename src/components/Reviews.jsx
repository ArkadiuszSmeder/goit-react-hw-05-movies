import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { useQuery } from "react-query";

const Reviews = () => {

  const { movieId } = useParams(); // używa parametru movieId do wyszukiwania w funkcji getMovieById - zaszyty w App i Home

  const getMovieReviews = async () => {

    const query = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=fcef3f7d90b41f3f85ee0cce371ea367`
    const response = await fetch(query)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

  const [movieReviews, setMovieReviews] = useState([]) // hook do przechowywania informacji o obsadzie

  useQuery({
    queryKey: ['movie-reviews', movieId],
    queryFn: () => getMovieReviews(),
    onSuccess: (movieReviews) => {
      setMovieReviews(movieReviews.results)
      console.log(movieReviews)
    }
  });

    return (
      <section>
        <h2>Reviews</h2>
        {movieReviews && movieReviews.length > 0 ? (
            <ul>
            {movieReviews.map(review => (
            <li key={review.id} style={{ marginBottom: '25px' }}>
                <div>{review.author}</div>
                <div>{review.content}</div>
            </li>
            ))}
            </ul>
        ) : (
        <p>No reviews for this movie yet</p>
        )}
      </section>
    );
  };
  
  export default Reviews;