import { render } from "enzyme";
import React, { Component } from "react"
import "./ColumnTwo.css"

class columnTwo extends Component {
   
  renderNewsCard =  () => {
    let arr = [];

    if(this.props.newsApi){
       this.props.newsApi.map(ele =>{
         // some data may have multimedia as null instead of an array, causing code to break, check for null
        if(ele.multimedia !== null){  
          arr.push(
       <div className="col-two-newscard">
        <div className="col-two-newscard-side1">
        <img alt = 'news' onClick={()=>window.open(ele.url, '_blank')}  className="col-two-img" src={ele.multimedia[0].url}/>
       
        

        </div>
        <div  className="col-two-newscard-side2">
       <h3 onClick={()=>window.open(ele.url, '_blank')}>{ele.title}</h3>
       <p onClick={()=>window.open(ele.url, '_blank')}>{ele.byline}</p></div>
      </div>
      ) 
        } 
      }) 
      
      return arr.slice(1,7);
  }}
  render() {
    console.log(this.props.newsApi)
  return (
    <div className="column-two">
     { this.props.newsApi ? this.renderNewsCard() : <></>}
        </div>
        )
      }
}

export default columnTwo
