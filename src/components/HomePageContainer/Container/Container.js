import React,{Component} from "react"
import NewsColumnOne from "../NewsColumnOne/NewsColumnOne"
import NewsColumnTwo from "../NewsColumnTwo/NewsColumnTwo"
import NewsColumnThree from "../NewsColumnThree/NewsColumnThree"
import "./Container.css"
import axios from "axios"

class Container extends Component{
    constructor(props) {
        super(props)
        this.state = {
            newsArr : this.props.newsArr
        }
    }
    
    
   render(){
       console.log(this.props.newsArr)
    return (<div className="home-page-container"> 
        <NewsColumnOne newsArr={this.props.newsArr} />
        <NewsColumnTwo multiNewsApi={this.multiNewsApi} newsArr={this.props.newsArr} />
        <NewsColumnThree newsArr={this.props.newsArr} />
</div>
    )
    }
}

export default Container