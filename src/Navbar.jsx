import { Link } from 'react-router-dom';
import { useDentistState } from '../contexts/DentistContext';

const Navbar = () => {
  const { state, dispatch } = useDentistState()
  
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" })
  }

  return (
    <nav className={state.theme}>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favs">Favs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button onClick={toggleTheme} className="theme-button">
        {state.theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

export default Navbar;