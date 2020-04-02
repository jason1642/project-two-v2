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
      newsApi : [],
      stockApiTwo : []
    }
  }
  componentDidMount = async() => {
    const API_KEY = "QWjf4uT4S6lcAj8uGFIQ0Xpn6ioy730Q";
    const response = await axios(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${API_KEY}`)
    
    this.setState({
      newsApi : response.data.results
    })
    console.log(response.data.results[0].multimedia[0].url)





    //25 most active stocks
    const API_KEY_TWO = "sk_6c78c6836d0240f585f888b8e84ef757"
    const responseTwo = await axios(`https://cloud.iexapis.com/stable/stock/market/list/mostactive?listLimit=25&token=${API_KEY_TWO}`)
    
    console.log(responseTwo.data)


    // //volume stocks
    const responseThree = await axios(`https://cloud.iexapis.com/stable/stock/market/list/iexvolume?listLimit=14&token=${API_KEY_TWO}`)

    
console.log(responseThree.data)
this.setState({
     stockApi : responseTwo.data,
     stockApiTwo : responseThree.data
    })





  }
  render() {
    return (
      <div className="business-container">
        <Ticker stockApi={this.state.stockApi}/>
        <div className='business-column-nest'>
        <ColumnOne newsApi={this.state.newsApi}/>
        <ColumnTwo newsApi={this.state.newsApi} />
        <ColumnThree stockApi={this.state.stockApiTwo} />
        </div>
      </div>
    )
  }
}

export default Business