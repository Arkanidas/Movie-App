import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import './moviestyle.scss'
import { Link } from 'react-router-dom'
import { TbArrowBackUp } from "react-icons/tb";
import { FaVolumeXmark } from "react-icons/fa6";
import { IoMdVolumeHigh } from "react-icons/io";
import bgMusic from '../public/music.mp3'




function MovieDetails() {

  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [volume, setVolume] = useState(false)

  const audioRef = useRef(null);




  const handleVolumeToggle = () => {
    setVolume(!volume);

    if(volume){
      audioRef.current.pause()
    }

    else{
      audioRef.current.play()
      audioRef.current.volume = 0.2; 
    
    }
  }


  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=3febba1&i=${imdbID}`)
      const data = await res.json()
      setMovie(data)
      setLoading(false)
    }

    if (audioRef.current) {
      audioRef.current.volume = 0.2
      audioRef.current.play().catch(err => {
        console.log("Autoplay blocked:", err)
      })
    }

    fetchDetails()

   

  }, [imdbID])

  if (loading) return <div className="loader"></div>
  if (!movie) return <p>Movie not found.</p>

  return (

    
         
<div className='background'>


    <Link to ={ "/"} style={{ textDecoration: 'none' }}>
     <button className="back-button"> <TbArrowBackUp className="back-icon"/>Back</button>
    </Link>

  {volume ? (  
    <div className="volume-icon">
    <IoMdVolumeHigh onClick={handleVolumeToggle}/>
    </div>
  

  ):( 
<div className="volume-icon">
<FaVolumeXmark onClick={handleVolumeToggle}/>

</div>
)}

    <audio ref={audioRef} src={bgMusic} loop />
    <div className='movies-container'>
    <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
    <div className="movie-details">

      <h5 className='Movie-title'>{movie.Title}</h5>
      <p className='movie-description'><strong><category>Genre:</category></strong> {movie.Genre}</p>
      <p className='movie-description'><strong><category>Plot:</category></strong> {movie.Plot}</p>
      <p className='movie-description'><strong><category>Awards:</category></strong> {movie.Awards}</p>
      <p className='movie-description'><strong><category>Runtime:</category></strong> {movie.Runtime}</p>
      <p className='movie-description'><strong><category>Actors:</category></strong> {movie.Actors}</p>
      <p className='movie-description'><strong><category>IMDB Rating:</category></strong> {movie.imdbRating}</p>
    </div>
    </div>
    </div>
  )
}

export default MovieDetails
