import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistState } from '../Context/Context'


const Navbar = () => {
  const { state, dispatch } = useDentistState()
  const theme = state.theme
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" })
  }

  return (
    <nav className={"nav"}>

      <ul className={"nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favs">Favs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>


      <button onClick={toggleTheme} className={`nav ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        Change Theme {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

export default Navbar