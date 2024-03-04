import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './header'
import Footer from './footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Footer/>
    <App/>
  
    </React.StrictMode>
)
