import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const App = () => {

  const [qrcode, setQrcode] = useState('http://facebook.github.io/react/')

  const [field, setField] = useState('')

  const handleQrCode = e => {
    setField(e.target.value)
  }

  const generateQrCode = (e) => {
    e.preventDefault();
    setQrcode(field);
  }

  return (

    <div >
      <h3>QRCode Generator</h3>
      <form onSubmit={generateQrCode}>
        <p>
          <input
            placeholder='Name Field'
            name='field'
            value={field}
            onChange={handleQrCode}
          />
          <input
            type='submit'
            value='Generate'
          />
        </p>
      </form>

      <div>
        <QRCode value={qrcode} />
      </div>
      <span>Generated: {qrcode}</span>

      <footer>
        <h5>Produced by: Vitor Rios</h5>
        <a href='https://github.com/vitorrios1001'>github/vitorrios1001</a>
      </footer>
    </div>
  );
}

export default App;
