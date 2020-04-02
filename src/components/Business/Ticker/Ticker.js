import React from "react"
import "./Ticker.css"

const ticker = props => {
  let regex = /-/g;
  

  return (
    <div class="text-wrapper-container">
      <div class="ticker-wrap">
      <div class="ticker-move">
      {/* {props.stockApi?
        props.stockApi.map(ele=><div class="ticker-item"><span className="ticker-symbol">{ele.symbol}: </span><span className="ticker-price" style={{color : regex.test(ele.changePercent) ? "red" : "green"
    }}>{ele.latestPrice} ({ele.changePercent})</span></div>) : <> </>} */}
        
    </div>
    </div>
    </div>
  )
}

export default ticker
