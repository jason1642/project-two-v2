import React from "react"
import "./NewsColumnThree.css"

const NewsColumnThree = props => {


  let arr = [];


  const displayTitleLists = () => {
    props.newsArr.map(ele => {
      arr.push(<div onClick={() => window.open(ele.url, "_blank")} className="col-three-link">{ele.title}</div>)
    })
    console.log(arr.slice(10, 24))
    return arr.slice(10, 24)

  }

  // props.newsArr.then(e => console.log(e))
  return (
    <div className="news-column-three">
      {
        props.newsArr ? <>
          <div className="col-three-img-div">
            {props.newsArr[3].multimedia[0].url !== null ?
              <img alt='' onClick={() => window.open(props.newsArr[3].url, "_blank")} className="col-three-img" src={props.newsArr[3].multimedia[0].url} />
              : <></>}
          </div>
          <h2 onClick={() => window.open(props.newsArr[3].url, "_blank")} className="col-three-main-title">{props.newsArr[3].title}</h2>
          {displayTitleLists()}
        </>
          :
          <></>
      }
    </div>

  )
}

export default NewsColumnThree