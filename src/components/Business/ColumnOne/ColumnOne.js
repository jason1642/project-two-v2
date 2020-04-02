import React from "react"
import "./ColumnOne.css"

const columnOne = props => {

  let arr = [];
  const mapNews = () => {
    if(props.newsApi) {
    props.newsApi.map(ele=>arr.push(<h1>{ele.title}</h1>))
    }
    return arr.slice(0,5);
  }

  return (<>
    { props.newsApi[1]? 
    <div className="column-one">
      <div className="business-main-card">
      <img className="col-one-img" src={props.newsApi[5].urlToImage} />
      <h1 className="col-one-title">{props.newsApi[0].title}</h1>
      </div>
      
        </div>
         : <></>
        }
        </>
  )
}

export default columnOne