import React from 'react'

const Message = ({ nombre, apellido }) => {
    return (
        <>
            <h4>¡Muchas gracias, {nombre} {apellido}!</h4>
            <h4>Nos comunicaremos con usted lo mas pronto posible</h4>
        </>
    )
}

export default Message