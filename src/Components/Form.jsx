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
      regExNumber.test(user.DNI) &&
      regExNumber.test(user.telefono) &&
      !user.pais
    ) {
      setShow(true);
      setErrors(false);
      setTimeout(() => {
        navigate("/Home"), 3000;
      });
    } else {
      setErrors(true);
    }
  };

  return (
    <div>
      <form></form>
    </div>
  );
};

export default Form;
