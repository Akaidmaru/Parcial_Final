import React from 'react'

const Footer = () => {
  return (
    <footer>
      <section className="footer-left">
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' />
      </section>
      <section className="footer-right">
        <img
          src="../images/ico-facebook.png" alt='Logo Facebook' className='footer-logo'
        />
        <img
          src="../images/ico-instagram.png" alt='Logo Instagram' className='footer-logo'
        />
        <img
          src="../images/ico-tiktok.png" alt='Logo Tiktok' className='footer-logo'
        />
        <img
          src="../images/ico-whatsapp.png" alt='Logo WhatsApp' className='footer-logo'
        />
      </section>
    </footer>
  )
}

export default Footer
