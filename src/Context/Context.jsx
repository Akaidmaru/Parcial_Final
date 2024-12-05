import React from 'react'
import axios from 'axios'
import { createContext,useContext,useEffect,useReducer } from "react";
import { reducer } from "../Reducers/Reducer";

const DentistState = createContext();
const initialState = {
    data: [],
}
const Context = ({children}) => {
    const [state, dispatch] = useReducer((reducer, initialState))

    const URL = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
      axios.get(URL).then((res) => {
        dispatch({
          type: "GET_DATA",
          payload: res.data,
        });
      });
    }, []);


  return (
    <DentistState.Provider value={{state,dispatch}}>
        {children}
    </DentistState.Provider>
  )
}

export default Context

export const useDentistState = () => useContext(DentistState)
