import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    DNI: "",
    email: "",
    telefono: "",
    pais: "",
  });

  const [errors, setErrors] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const regExNumber = /^[0-9]+$/;
    const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (
      user.nombre.trim().length >= 2 &&
      user.apellido.trim().length >= 2 &&
      regExNumber.test(user.DNI) &&
      regExEmail.test(user.email) &&
      regExNumber.test(user.telefono) &&
      !user.pais > 0
    ) {
      setShow(true);
      setErrors(false);
      setTimeout(() => {
        navigate("/Home")
      }, 3000);
    } else {
      setErrors(true);
    }
  };

  return (
    <>
      {show ? (<Message nombre={user.nombre} apellido={user.apellido} />) :
        (
          <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={user.nombre}
              onChange={(event) => setUser({ ...user, nombre: event.target.value })}
            />
            <label>Apellido</label>
            <input
              type="text"
              placeholder="Apellido"
              value={user.apellido}
              onChange={(event) => setUser({ ...user, apellido: event.target.value })}
            />
            <label>DNI</label>
            <input
              type="text"
              placeholder="DNI"
              value={user.DNI}
              onChange={(event) => setUser({ ...user, DNI: event.target.value })}
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              value={user.email}
              onChange={(event) => setUser({ ...user, email: event.target.value })}
            />
            <label>Telefono</label>
            <input
              type="text"
              placeholder="Telefono"
              value={user.telefono}
              onChange={(event) => setUser({ ...user, telefono: event.target.value })}
            />
            <label>Pais</label>
            <input
              type="text"
              placeholder="Pais"
              value={user.pais}
              onChange={(event) => setUser({ ...user, pais: event.target.value })}
            />
            <button type="submit">Enviar</button>
            {errors ? <p style={{ color: "red" }}>Todos los campos son obligatorios</p> : null}
          </form>)}
    </>)
};

export default Form;
