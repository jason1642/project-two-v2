import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"
// import '../images/penguinLogo.jpeg'

const Header = () => {
  return (
    <header>
      <h1>Sky News</h1>
      {/* <img className="header-img" src={penguinLogo.jpeg} /> */}

      <Link className="business-button-link" to="/business"><button className="business-button">Business</button></Link>
      <Link className="home-link" to="/">Home</Link>
    </header>
  )
}

export default Header