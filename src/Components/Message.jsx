import React from 'react'

const Message = ({ nombre, apellido }) => {
    return (
        <div className="message-container">
            <div className="message-content">
                <h4>¡Muchas gracias, {nombre} {apellido}!</h4>
                <h4>Nos comunicaremos con usted lo más pronto posible</h4>
                <span className="success-icon">✅</span>
            </div>
        </div>
    )
}

export default Message