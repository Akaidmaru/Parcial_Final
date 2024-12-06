import React from 'react'
import axios from 'axios'
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/Reducer";

const DentistState = createContext();

const initialState = {
  data: [],
  theme: "light",
}

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const URL = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(URL).then((res) => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const data = res.data.map((dentist) => ({
        ...dentist,
        favorite: favorites.some((fav) => fav.id === dentist.id),
      }))
      console.log("Fecthed Data: ", data);
      
      dispatch({
        type: "GET_DATA",
        payload: data,
      });
    });
  }, []);


  return (
    <DentistState.Provider value={{ state, dispatch }}>
      {children}
    </DentistState.Provider>
  )
}

export default Context

export const useDentistState = () => useContext(DentistState)
