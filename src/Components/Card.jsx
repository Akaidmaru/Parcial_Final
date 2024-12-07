import React from "react"
import { Link } from "react-router-dom"
import doctorImage from "/images/doctor.jpg"
import { useDentistState } from "../Context/Context";

const Card = ({ name, username, id }) => {

  const { dispatch } = useDentistState()
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ 
      type: "ADD_FAV", 
      payload: { id } 
    })
  }


  return (
    <div >
      <Link to={`/dentista/${id}`}>
        <img src={doctorImage} alt="doctor" width={300}/>
        <h3 className="dentist-items">ID: {id}</h3>
        <h3 className="dentist-items">Username: {username}</h3>
        <h3 className="dentist-items">Name: {name}</h3>
      </Link>

      <button onClick={addFav} className="favButton">Add fav 🌟</button>
    </div>
  );
};

export default Card;
