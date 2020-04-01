import React from "react"
import "./NewsColumnThree.css"

const NewsColumnThree = props => {
    let arr = [];
    const displayTitleLists = () => {
            props.newsArr.map(ele=>{
            arr.push( <div onClick={()=>window.open(ele.url, "_blank")} className="col-three-link">{ele.title}</div>)
            })
            return arr.slice(10, 27)
        
    }
    const renderFunc = () => 
             props.newsArr[1] ? <><div className="col-three-img-div">
                <img onClick={()=>window.open(props.newsArr[3].url, "_blank")} className="col-three-img" src={props.newsArr[3].multimedia[0].url} /></div>
                <h2  onClick={()=>window.open(props.newsArr[3].url, "_blank")} className="col-three-main-title">{props.newsArr[3].title}</h2>
            {displayTitleLists()}
            </>
            : <></> 
    return (
       <div className="news-column-three">
          {renderFunc()}
        </div>
   
    )
}

export default NewsColumnThree