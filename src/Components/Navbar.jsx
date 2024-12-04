import React from 'react'
import Form from './Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav><Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/favs" element={<Favs/>}/>
      <Route path="/contact" element={<Form/>}/>
    </Routes>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar