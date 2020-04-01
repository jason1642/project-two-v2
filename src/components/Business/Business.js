import React, { Component } from "react"
import Ticker from "./Ticker/Ticker"
import "./Business.css"
import ColumnOne from "./ColumnOne/ColumnOne"
import ColumnTwo from "./ColumnTwo/ColumnTwo"


class Business extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="business-container">
        <Ticker />
        <ColumnOne />
        <ColumnTwo />
      </div>
    )
  }
}

export default Business