import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './moviestyle.scss'
import { Link } from 'react-router-dom'

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
         
<div className='background'>
    <Link to ={ "/"}>
     <button className="back-button">Back</button>
    </Link>

    <div className='movies-container'>
    <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
    <div className="movie-details">
      <h5>{movie.Title}</h5>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Awards:</strong> {movie.Awards}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
    </div>
    </div>
  )
}

export default MovieDetails
