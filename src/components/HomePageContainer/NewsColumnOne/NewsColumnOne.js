import React from "react"
import "./NewsColumnOne.css"

const NewsColumnOne = props => {
   
    
    const renderFunc = () =>{
         let arr = [];
        if(props.newsArr[0]){ 
props.newsArr.map(ele => {
                    if(ele.subsection !== ''){    
                    let tempSubSec = ele.subsection.split("");
                    tempSubSec[0] = tempSubSec[0].toUpperCase();
                    tempSubSec.join("")      
                    arr.push(<p onClick={()=>window.open(ele.url, '_blank')} className="col-one-title-link"><b>{tempSubSec}: </b>{ele.title}</p>)
                    }
                })
            return (<div><div onClick={()=>window.open(props.newsArr[0].url, '_blank')}className="main-story-div">
            <h1 className="col-one-title">{props.newsArr[0].title}</h1>
            <img className="column-one-img"src={props.newsArr[0].multimedia[0].url} />
<p class="col-one-main-desc">{props.newsArr[0].abstract}</p>
        </div>
        <div className="col-one-link-section">
            {arr.slice(0,5)}
        
        </div></div>) } else {return <></>}
    }
    return (
        <div className="news-column-one">
            {renderFunc()}
            </div>
        )
    }   
export default NewsColumnOne