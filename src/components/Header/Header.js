import React from "react"
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
    const showInput = () => document.querySelector("input").style.display = "inline-block"
    
    return(
        <header>
        
      <img className="header-img" src="https://cdn3.iconfinder.com/data/icons/abstract-tree-wood-forest-ecology-landscape-eco-gr/1470/green_eco_leaves_circle_logo_eco_recycle-512.png" />
      <h1 className="header-title">Header</h1>
      <button className="search-button">World</button>
      <button className="search-button">Business</button>
      <button className="search-button">Tech</button>
      <button className="search-button">Sports</button>
      <input className="header-input" type="text" placeholder="Search" />
      <button>Search</button>
      <Link className="home-link" to="/">Home</Link>
    </header>
    )
}

export default Header