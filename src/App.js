import React,{Component} from 'react';
import './App.css';
import {Link, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Business from "./components/Business/Business"
import Container from "./components/HomePageContainer/Container/Container"
import axios from "axios"





class App extends Component {
  constructor() {
    super()
    this.state = {
      mainNewsApi : {},
      multiNewsApi : {},
      newsCategory : "world"
    }
  }
  componentDidMount = async () => {
    const API_KEY = "QWjf4uT4S6lcAj8uGFIQ0Xpn6ioy730Q";
    const response = await axios(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
    

    
    this.setState({
      mainNewsApi : response.data.results
    })
  }
    
  

  render() {
  return (
    <div className="App">
      <Header />
    <main>
      <Route exact path="/" render={()=><Container newsArr={this.state.mainNewsApi} />} />
      <Route exact path="/business" render={routerProps => <Business newsArr={this.state.mainNewsApi}  {...routerProps} />}/>
    </main>
    </div>
  );
  }
}

export default App;
