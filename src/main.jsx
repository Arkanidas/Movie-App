import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './header'
import Footer from './footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './Movie' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <Routes>
  <Route path="/" element={
    <div className='layout'>
      <Header />
      <App />
      <Footer />
    </div>
  } />
  <Route path="/movie/:imdbID" element={<MovieDetails/>} />
</Routes>

     </BrowserRouter>  
    </React.StrictMode>
)
