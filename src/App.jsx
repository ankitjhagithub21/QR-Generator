import React, { useState } from 'react'
import "./App.css"
import QRCode from 'react-qr-code';
const App = () => {
  const [name, setName] = useState('')
  
  return (
    <div className='container'>
      <h1>QR Code Generator By Ankit</h1>

      <div className='input-container'>
        <input type="text" placeholder='Type something to generate Qr' value={name} onChange={(e) => setName(e.target.value)} />
      
      </div>
     {
      name &&  <p>Qr Code for {name}</p>
     }
      <div>
        {name && (
          <QRCode
          titile="TechSimPlus"
            value={name}
           
          />
        )}
      </div>
    </div>
  )
}

export default App
