import React from "react"
import "./ColumnThree.css"


const columnThree = props => {

  const renderStocks = () => {
    let stockColor;
    return props.stockApi.map(ele => {
      let regex = /-/g;
      regex.test(ele.change) ? stockColor = "red" : stockColor = "green"
      return <div className="watchlist-cell">
        <div className="watchlist-name">
          <div style={{ fontSize: "1.5em" }}>{ele.symbol}</div>
          <div style={{ fontSize: ".9em", color: "rgb(61, 61, 61)" }}>{ele.companyName}</div>
        </div>
        <div className="watchlist-price" style={{ color: stockColor }}>{ele.latestPrice}</div>
        <div className="watchlist-change" style={{ color: stockColor }}>{ele.change}</div>
        <div className="watchlist-percent-change" style={{ color: stockColor }}>{ele.changePercent}</div>
      </div>
    })

  }
  return (
    <div className="column-three">
      <div className="watchlist-labels">
        <div className="WL-label">Name</div>
        <div className="WL-label">Price</div>
        <div className="WL-label">Change</div>
        <div className="WL-label" style={{ fontSize: "14px" }}>%Change</div>
      </div>
      {props.stockApi ? renderStocks() : <></>}
    </div>
  )
}

export default columnThree