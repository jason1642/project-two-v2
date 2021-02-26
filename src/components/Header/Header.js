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
  margin: auto 20px;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
    color:  rgb(54, 93, 138);
  }
  `;

  const LinkContainer = styled.div`
    align-self: flex-end;
  `

  return (
    <header>
      <Title >Sky News</Title>

      <LinkContainer>
        <Link className="business-button-link" to="/business">
          <HeaderButtons className="business-button">Business</HeaderButtons></Link>

        <Link className="home-link" to="/"><HeaderButtons className='home-button'>Home</HeaderButtons></Link>
      </LinkContainer>
    </header>
  )
}

export default Header