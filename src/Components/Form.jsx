import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "./Message";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    DNI: "",
    email: "",
    telefono: "",
    pais: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    DNI: "",
    email: "",
    telefono: "",
    pais: "",
  });

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        return value.trim().length < 2 ? "El nombre debe tener al menos 2 caracteres" : "";
      case 'apellido':
        return value.trim().length < 2 ? "El apellido debe tener al menos 2 caracteres" : "";
      case 'DNI':
        return !/^[0-9]+$/.test(value) ? "El DNI debe contener solo números" : "";
      case 'email':
        return !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value) 
          ? "Por favor ingrese un email válido" : "";
      case 'telefono':
        return !/^[0-9]+$/.test(value) ? "El teléfono debe contener solo números" : "";
      case 'pais':
        return value.trim().length === 0 ? "Por favor ingrese un país" : "";
      default:
        return "";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validar todos los campos
    const newErrors = {};
    Object.keys(user).forEach(key => {
      newErrors[key] = validateField(key, user[key]);
    });
    
    setErrors(newErrors);

    // Verificar si hay errores
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    
    if (!hasErrors) {
      setShow(true);
      setTimeout(() => {
        navigate("/")
      }, 4000);
    }
  };

  return (
    <>
      {show ? (
        <Message nombre={user.nombre} apellido={user.apellido} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={user.nombre}
              onChange={handleChange}
              className={errors.nombre ? "input-error" : ""}
            />
            {errors.nombre && <p className="error-message">{errors.nombre}</p>}
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={user.apellido}
              onChange={handleChange}
              className={errors.apellido ? "input-error" : ""}
            />
            {errors.apellido && <p className="error-message">{errors.apellido}</p>}
          </div>

          <div className="form-group">
            <label>DNI</label>
            <input
              type="text"
              name="DNI"
              placeholder="DNI"
              value={user.DNI}
              onChange={handleChange}
              className={errors.DNI ? "input-error" : ""}
            />
            {errors.DNI && <p className="error-message">{errors.DNI}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={user.telefono}
              onChange={handleChange}
              className={errors.telefono ? "input-error" : ""}
            />
            {errors.telefono && <p className="error-message">{errors.telefono}</p>}
          </div>

          <div className="form-group">
            <label>País</label>
            <input
              type="text"
              name="pais"
              placeholder="País"
              value={user.pais}
              onChange={handleChange}
              className={errors.pais ? "input-error" : ""}
            />
            {errors.pais && <p className="error-message">{errors.pais}</p>}
          </div>

          <button type="submit">Enviar</button>
        </form>
      )}
    </>
  );
};

export default Form;
