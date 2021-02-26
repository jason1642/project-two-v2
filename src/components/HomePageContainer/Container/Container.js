import React, { useState, useEffect } from "react"
import NewsColumnOne from "../NewsColumnOne/NewsColumnOne"
import NewsColumnTwo from "../NewsColumnTwo/NewsColumnTwo"
import NewsColumnThree from "../NewsColumnThree/NewsColumnThree"
import "./Container.css"
import axios from "axios"

const Container = props => {

  const [newsArray, setNewsArray] = useState()

  useEffect(() => {
    const getData = async () => {
      const API_KEY = "QWjf4uT4S6lcAj8uGFIQ0Xpn6ioy730Q";
      const response = await axios(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
      console.log(response.data.results)
      return response.data.results
    }
    getData().then(e => setNewsArray(e))

  }, [])
  console.log(newsArray)
  return (<div className="home-page-container">
    { newsArray && <>
      <NewsColumnOne newsArr={newsArray} />
      <NewsColumnTwo multiNewsApi={newsArray} newsArr={newsArray} />
      <NewsColumnThree newsArr={newsArray} /></>
    }
  </div>
  )
}


export default Container