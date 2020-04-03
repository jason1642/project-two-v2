import React from "react"
import { shallow } from 'enzyme'
import App from './App.js'
import Business from "./components/Business/Business.js"
import ColumnOne from "./components/Business/ColumnOne/ColumnOne"
import ColumnTwo from "./components/Business/ColumnTwo/ColumnTwo"
import ColumnThree from "./components/Business/ColumnThree/ColumnThree"
import Ticker from "./components/Business/Ticker/Ticker"
import NewsColumnOne from "./components/HomePageContainer/NewsColumnOne/NewsColumnOne.js"
import NewsColumnTwo from "./components/HomePageContainer/NewsColumnTwo/NewsColumnTwo.js"
import NewsColumnThree from "./components/HomePageContainer/NewsColumnThree/NewsColumnThree.js"
import Container from "./components/HomePageContainer/Container/Container.js"
import Header from "./components/Header/Header"
describe('Hello world component', () => {
  it('should render as expected', () => {
    const component = shallow(<App />)
    expect(component.contains(<Header />)).toBe(true)
  })
  it('should render as expected', () => {
    const component = shallow(<Container />)
    expect(component.contains(<NewsColumnOne />)).toBe(true)
  })
  it('newscolumn should render as expected', () => {
    const component = shallow(<Container />)
    expect(component.contains(<NewsColumnTwo />)).toBe(true)
  })
  it('newscolumn should render as expected', () => {
    const component = shallow(<Container />)
    expect(component.contains(<NewsColumnThree />)).toBe(true)
  })
  it('div with class - home-page-container should render as expected', () => {
    const component = shallow(<Container />)
    expect(component.find('div').hasClass("home-page-container")).toBe(true)
  })
  it('should render as expected', () => {
    const component = shallow(<Business />)
    expect(component.contains(<ColumnOne />)).toBe(false)
  })
  it('column should render as expected', () => {
    const component = shallow(<Business />)
    expect(component.contains(<ColumnTwo />)).toBe(false)
  })
  it('should have a state attribute called number initialized to zero', () => {
    const component = shallow(<Business />)
    expect(component.state('stockApiTwo')).toEqual([])
  })
  it('should have a state attribute called number initialized to zero', () => {
    const component = shallow(<Business />)
    expect(component.state('newsApi')).toEqual([])
  })
  it('column should render as expected', () => {
    const component = shallow(<Business />)
    expect(component.contains(<ColumnThree />)).toBe(false)
  })
  it('column should render as expected', () => {
    const component = shallow(<Business />)
    expect(component.contains(<Ticker />)).toBe(true)
  })
  it('div with class -App should render as expected', () => {
    const component = shallow(<App />)
    expect(component.find('div').hasClass('App')).toBe(true)
  })
  it('should have a state attribute called number initialized to zero', () => {
    const component = shallow(<App />)
    expect(component.state('mainNewsApi')).toEqual({})
  })
  it('should have a state attribute called number initialized to zero', () => {
    const component = shallow(<App />)
    expect(component.state('multiNewsApi')).toEqual({})
  })
  it('should have a state attribute called number initialized to zero', () => {
    const component = shallow(<App />)
    expect(component.state('newsCategory')).toEqual('world')
  })

})
