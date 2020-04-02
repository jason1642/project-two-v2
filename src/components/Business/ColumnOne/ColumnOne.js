import React from "react"
import "./ColumnOne.css"

const columnOne = props => {

  let arr = [];
  const renderLinks = () => {

    if(props.newsApi) {
    props.newsApi.map(ele=>arr.push(<div onClick={()=>window.open(ele.url, '_blank')} className="business-col-one-link">{ele.title}</div>))
    }
    return arr.slice(5,17);
  }

  return (<>
    { props.newsApi[1]? 
    <div className="column-one">
      <div className="business-main-card1">
      <img  onClick={()=>window.open(props.newsApi[0].url, '_blank')} className="business-col-one-img1" src={props.newsApi[0].multimedia[0].url} />
      <h1 className="business-col-one-title" onClick={()=>window.open(props.newsApi[0].url, '_blank')} >{props.newsApi[0].title}</h1>
      </div>

      <div className="business-col-one-link-container">


        {renderLinks()}


      </div>
        </div>
         : <></>
        }
        </>
  )
}

export default columnOne