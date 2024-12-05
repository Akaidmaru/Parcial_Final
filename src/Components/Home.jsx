import React from 'react'
import { useDentistState } from '../Context/Context'

const Home = () => {
    const {state} = useDentistState()

    return (
        <><div>Home</div>
        <h1>Odontólogos</h1>
        {state.data.map((dentist) => (
            <Card key = {dentist.id} /> ))}
        </>
    )
}

export default Home