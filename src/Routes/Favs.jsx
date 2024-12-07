import React from "react";
import Card from "../Components/Card";
import { useDentistState } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentistState()

  const favoriteDentists = state.data.filter((dentist) => dentist.favorite)
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favoriteDentists.map((dentist) => (
          <Card 
          key={dentist.id}
          name={dentist.name} 
          username={dentist.username} 
          id={dentist.id} />
        ))}

      </div>
    </>
  );
};

export default Favs;
