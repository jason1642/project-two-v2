import React, { Component } from "react"
import "./NewsColumnTwo.css"
import { render } from "@testing-library/react";
import axios from "axios"

class NewsColumnTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount = async () => {

    const API_KEY_TWO = "cce7827002dc4aacac0aa05b70ad0f33"
    const responseTwo = await axios(`https://newsapi.org/v2/top-headlines?q=world&apiKey=${API_KEY_TWO}`)
    console.log(this.state.list)
    this.setState({
      list: responseTwo.data.articles.map(ele => <li className="col-two-li" onClick={() => window.open(ele.url, "_blank")}>{ele.title}</li>)
    })
  }

  renderFunc = () => {

    console.log(this.state.list)
    return (<>
      <div onClick={() => window.open(this.props.newsArr[0].url, "_blank")} className="col-two-img-div">
        <img alt='' className="column-two-img" src={this.props.newsArr[1].multimedia[0].url} />
        <div className="on-img-label">Just In</div>
      </div>
      <h2 onClick={() => window.open(this.props.newsArr[0].url, "_blank")} className="col-two-main-title">{this.props.newsArr[1].title}</h2>
      <br />
      <div className="col-two-ul">
        <ul>
          {this.state.list.slice(0, 3)}
        </ul></div>
      <div className="col-two-story-two">
        {this.props.newsArr[2].multimedia[0].url !== null ? <img alt='' onClick={() => window.open(this.props.newsArr[2].url, "_blank")} className="col-two-img-two" src={this.props.newsArr[2].multimedia[0].url} /> : <></>}
        <h2 onClick={() => window.open(this.props.newsArr[2].url, "_blank")} className="col-two-main-title">{this.props.newsArr[2].title}</h2>
        <div className="col-two-ul2">
          <ul>
            {this.state.list.slice(3, 8)}
          </ul></div>
      </div>
    </>
    )
  }
  render() {

    return (
      <div className="news-column-two">
        {this.props.newsArr[1] ? this.renderFunc() : <> </>}
      </div>
    )
  }
}

export default NewsColumnTwo