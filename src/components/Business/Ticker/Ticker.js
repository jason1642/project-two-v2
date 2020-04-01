import React from "react"
import "./Ticker.css"

const ticker = props => {
  const renderTitles = () => {
    return (
      <div class="ticker-move">
        {props.mainNews.map(ele => <div onClick={() => window.open(ele.url, '_blank')} class="ticker-item">{ele.title}</div>)
        }
      </div>
    )
  }
  return (
    <div class="text-wrapper-container">
      <div class="ticker-wrap">
        {props.mainNews ? renderTitles() : <></>}
      </div>
    </div>
  )
}

export default ticker
