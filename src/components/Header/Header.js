import React from "react"
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {    
    return(
        <header>
        
      <img className="header-img" src="https://lh3.googleusercontent.com/proxy/skUhB5lhrLqnZM34EAv80Y-ET5oP0MDk6K_OroxLemYomH7k5hlW7SUVDenl67d_WX1zK6HKYvFqeSPpqu5XdSEWCvtWTT9iXQtrmGeCwLZXTLlevilWqnTwmUshv0Q4DujKY2sArt5jjSP2mS8" />
      {/* <h1 className="header-title">My news website</h1> */}

      <Link className="business-button-link" to="/business"><button className="business-button">Business</button></Link>
      <Link className="home-link" to="/">Home</Link>
    </header>
    )
}

export default Header