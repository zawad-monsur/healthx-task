import React from 'react'
import '../components/FooterStyles.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <h1>250</h1>
        <p>Best Doctors</p>
      </div>
      <div className="footer-item">
        <h1>15</h1>
        <p>Clinics</p>
      </div>
      <div className="footer-item">
        <h1>20</h1>
        <p>Surgery Rooms</p>
      </div>
      <div className="footer-item">
        <h1>+1500</h1>
        <p>Patient Capacity</p>
      </div>
    </footer>
  )
}

export default Footer