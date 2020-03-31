import React,{Component} from "react"
import "./NewsColumnTwo.css"
import { render } from "@testing-library/react";
import axios from "axios"

class NewsColumnTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }
componentDidMount = async () => {
        let topic = "tesla"
        let arr = []
        const API_KEY_TWO = "cce7827002dc4aacac0aa05b70ad0f33"
        const responseTwo = await axios(`https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=${API_KEY_TWO}`)
        this.setState({
            list : responseTwo.data.articles.map(ele=><li>{ele.title}</li>)
        })
    }
    renderFunc = () => {
        if(this.props.newsArr[1]) {
            console.log(this.props.newsArr[1].multimedia[0].url)
            return (<>
                <div className="col-two-img-div">
                <img className="column-two-img" src={this.props.newsArr[1].multimedia[0].url} />
                <div className="on-img-label">Opinion</div>
                
                </div>
            <h1 className="col-two-main-title">{this.props.newsArr[1].title}</h1>
                <br />
                <ul>
                    {this.state.list}
                </ul>
                <div className="col-two-story-two">
                    <img src="https://cdn.cnn.com/cnnnext/dam/assets/200330112332-macys-herald-square-store-0329-restricted-large-tease.jpg" />
                    <h2>Title 2 column 2</h2>
                </div></>
            )
        } else {
            return (<></>)
        }
    }
    render() {
        console.log(this.props.newsArr[0])
    return (
        <div className="news-column-two">
          {this.renderFunc()}
        </div>
    )
    }
}

export default NewsColumnTwo