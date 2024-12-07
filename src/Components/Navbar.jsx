import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Styles from "../Styles/Navbar.module.css"
import { useDentistState } from '../Context/Context'


const Navbar = () => {
  const {state,dispatch} = useDentistState() 
  const toggleTheme = () => {
    dispatch({type:"TOGGLE_THEME"})
  }

  return (
    <nav className={Styles.nav}>
      
      <ul className={Styles['nav-links']}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favs">Favs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      
      
      <button onClick={toggleTheme} className={Styles['theme-button']}>Change theme</button>
    </nav>
  )
}

export default Navbar