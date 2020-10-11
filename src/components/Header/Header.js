import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import styled from 'styled-components'





const Header = () => {

  const Title = styled.h1`
  color:  rgb(54, 93, 138);
  font-size: 200%;
  text-align: center;
  `;

  const HeaderButtons = styled.button`
  height: 100%;
  background-color: inherit;
  color: white;
  font-size: 200%;
  border: none;
  margin: auto 0px;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
    color:  rgb(54, 93, 138);
  }
  `;

  return (
    <header>
      <Title >Sky News</Title>

      <Link className="business-button-link" to="/business">
        <HeaderButtons className="business-button">Business</HeaderButtons></Link>
        
      <Link className="home-link" to="/"><HeaderButtons className='home-button'>Home</HeaderButtons></Link>
    </header>
  )
}

export default Header