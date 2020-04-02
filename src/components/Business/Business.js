import React, { Component } from "react"
import Ticker from "./Ticker/Ticker"
import "./Business.css"
import ColumnOne from "./ColumnOne/ColumnOne"
import ColumnTwo from "./ColumnTwo/ColumnTwo"
import ColumnThree from "./ColumnThree/ColumnThree"
import axios from "axios"

class Business extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsApi : []
    }
  }
  componentDidMount = async() => {
    const API_KEY = "cce7827002dc4aacac0aa05b70ad0f33"
    const response = await axios(`https://newsapi.org/v2/top-headlines?q=business&apiKey=${API_KEY}`)
    
    this.setState({
      newsApi : response.data.articles
    })
    console.log(response.data.articles[0].urlToImage)
  }
  render() {
    return (
      <div className="business-container">
        <Ticker />
        <div className='business-column-nest'>
        <ColumnOne newsApi={this.state.newsApi}/>
        <ColumnTwo />
        <ColumnThree />
        </div>
      </div>
    )
  }
}

export default Business