import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"
// import '../images/penguinLogo.jpeg'

const Header = () => {
  return (
    <header>
      <h1 className='header-title'>Sky News</h1>

      <Link className="business-button-link" to="/business"><button className="business-button">Business</button></Link>
      <Link className="home-link" to="/"><button className='home-button'>Home</button></Link>
    </header>
  )
}

export default Header