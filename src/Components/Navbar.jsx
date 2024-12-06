import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../Routes/Home.jsx' //src\Routes\Home.jsx
import Favs from '../Routes/Favs.jsx' //src\Routes\Favs.jsx
import Form from './Form'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favs">Favs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar