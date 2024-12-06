import React from 'react'
import Card from '../Components/Card' //src\Components\Card.jsx
import { useDentistState } from '../Context/Context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDentistState()
  return (
    <main className="" >
      <h1>Home</h1>
      <h1>Odontólogos</h1>
      <div className='card-grid'>
        {state.data.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name} 
            username={dentist.username} 
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Home