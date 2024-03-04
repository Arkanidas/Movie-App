import React, { useEffect, useState } from 'react'
import './style.css'

function App() {

  const [data, setData] = useState([]);
  const [change, setchange] = useState('');
  const [loading, setLoading] = useState(true);

  const getdata = async () => {
    try{
    const response = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=3febba1&s=${change}`);
    let data = await response.json();
    setData(data.Search);
    setLoading(false);
   
    }
    
    catch(error){
    console.log("something went wrong, try again");
   }
  
  };
  
  let handlechange = (e) =>{
  setchange(e.target.value);
  };
  

  let datalist;
  
  if (loading) {
  datalist = <p>wait...</p>;
  } 

  else if (data && data.length > 0) {
    datalist = data.map((item) => (
      <div id='movies' key={item.imdbID}>
        <h5>{item.Title}</h5>
        <p>
          {item.Type} - {item.Year}
        </p>
        <img src={item.Poster} alt={item.Title}></img>
      </div>
    ));
  } 

  else {
    datalist = <p>Movie not found!</p>;
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



