import React, { useState } from 'react';
import QRCode from 'qrcode.react';

import './style.css'

const App = () => {

  const [qrcode, setQrcode] = useState('https://br.linkedin.com/in/vitorluizrios')

  const [field, setField] = useState('')

  const handleQrCode = e => {
    setField(e.target.value)
  }

  const generateQrCode = (e) => {
    e.preventDefault();
    setQrcode(field);
  }

  const clear = () => setField('')

  return (

    <div className="container" >
      <header>
        <h2><i className="fa fa-qrcode" /> QRCode Generator</h2>
      </header>


      <div className="container-qr-code">
        <div className="qr-code">
          <QRCode size={250} value={qrcode} />
        </div>
        <span className="result">Generated: {qrcode}</span>
      </div>

      <form onSubmit={generateQrCode}>

        <input
          placeholder='Value'
          name='field'
          value={field}
          onChange={handleQrCode}
        />
        <div className="buttons">
          <button
            className='button-clear'
            type='button'
            onClick={clear}
          >
            <i className="fa fa-trash" />
          </button>
          <button
            type='submit'
            className='button-generate'
          ><i className="fa fa-magic" /> Generate</button>
        </div>

      </form>

      <footer>
        <h5>Produced by: Vitor Rios</h5>
        <div className='network'>
          <a href='https://github.com/vitorrios1001' target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
          <a href='https://www.instagram.com/vitorluizrios/' target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" />
          </a>
          <a href='https://www.linkedin.com/in/vitorluizrios' target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" />
          </a>
          <a href='https://www.facebook.com/vitorluizrios' target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-f" />
          </a>
        </div>
        {/* <a href='https://github.com/vitorrios1001' target="_blank">github/vitorrios1001</a> */}
      </footer>
    </div>
  );
}

export default App;
