import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moviestyle from './moviestyle.scss'

function MovieDetails() {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=3febba1&i=${imdbID}`)
      const data = await res.json()
      setMovie(data)
      setLoading(false)
    }

    fetchDetails()
  }, [imdbID])

  if (loading) return <div className="loader"></div>
  if (!movie) return <p>Movie not found.</p>

  return (
         
<>
<div className="background-container">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
<div class="stars"></div>
<div class="twinkling"></div>
<div class="clouds"></div>
</div>
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Awards:</strong> {movie.Awards}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
    </>
  )
}

export default MovieDetails
