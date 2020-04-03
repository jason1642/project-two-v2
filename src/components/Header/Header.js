import React from "react"
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {    
    return(
        <header>
        
      <img className="header-img" src="https://lh3.googleusercontent.com/proxy/Ah8Z7YHYgCPgbd_g8J53ffjFRodseUKLpQKt2HS6OcLNkCEZBRo1_pNJ6qe8ERkOE020J-6knzbKBUHgxLbZf-KhY-uUWsWI-wJ0ylJzK_0pZaLZkE7EHo2vBvS0SJtUNt60zXDxnDAx7IjL9CQ" />

      <Link className="business-button-link" to="/business"><button className="business-button">Business</button></Link>
      <Link className="home-link" to="/">Home</Link>
    </header>
    )
}

export default Header