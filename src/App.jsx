import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.scss'

function App() {

  const [data, setData] = useState([]);
  const [change, setchange] = useState('');
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({});
  

  const getdata = async () => {
    try{
    const response = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=3febba1&s=${change}`);
    let data = await response.json();
    setData(data);
    setLoading(false);
    }
    
    catch(error){
    console.log("something went wrong, try again");
   }
  };

  const getMovieData = async (imdbID) => {
 
    try{
    setLoading(true);
    const movieRes = await fetch (`https://www.omdbapi.com/?apikey=3febba1&i=${imdbID}`);
    let moviedata = await movieRes.json();
    setMovieData(moviedata);
    setLoading(false);
    }
    
    catch(error){
    console.log("something went wrong, try again");
   }
  }
  

  let handlechange = (e) =>{
  setchange(e.target.value);
  };
  

  let datalist;
  
  if (loading) {
  datalist = <div className='loader'></div>
  } 

  else if ( data.Response === "True" && data.Search && data.Search.length > 0) {
    datalist = data.Search.map((item) => (

      <Link to={`/movie/${item.imdbID}`} key={item.imdbID}>
      <div id='movies' key={item.imdbID} onClick={() => getMovieData(item.imdbID)}>
        <h5>{item.Title}</h5>
        <h5>{item.imdbID}</h5>
        <p>
          {item.Type} - {item.Year}
        </p>
        <img className="poster-img" src={item.Poster} alt={item.Title}></img>
      </div>
        </Link>
    ));
  } 

  else if (data.Response === "False") {
    datalist = <p>{data.Error}</p>;
  }

useEffect(() => {
  setLoading(true);
  getdata();

}, [change]);


  return (

<div className="App">
<input type="text" name="input" id="input" onChange={handlechange} placeholder='Search movies...'></input>
<br/><br/><br/>
<div className='movie-container'>{datalist}</div>
</div>



  )
  
}


export default App



