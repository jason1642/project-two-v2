import React from "react"
import "./ColumnTwo.css"

const columnTwo = props => {
   
  const renderNewsCard = () => {
    let arr = [];
    if(props.newsApi){
      console.log(props.newsApi)
       props.newsApi.map(ele =>  arr.push(
       <div className="col-two-newscard">
        <div className="col-two-newscard-side1">
        <img onClick={()=>window.open(ele.url, '_blank')}  className="col-two-img" src={ele.multimedia[0].url }/></div>
        <div  className="col-two-newscard-side2">
       <h3 onClick={()=>window.open(ele.url, '_blank')}>{ele.title}</h3>
       <p onClick={()=>window.open(ele.url, '_blank')}>{ele.byline}</p></div>
      </div>) )
      }
      return arr.slice(1,7);
  }
 
  return (
    <div className="column-two">
     {renderNewsCard()}
        </div>
  )
}

export default columnTwo
