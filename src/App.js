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

      <form onSubmit={generateQrCode}>
        <p>
          <input
            placeholder='Name Field'
            name='field'
            value={field}
            onChange={handleQrCode}
          />
          <input
            type='button'
            value='Generate'
          />
        </p>
      </form>

      <div>
        <QRCode value={qrcode} />
      </div>
      <span>Generated: {qrcode}</span>
    </div>
  );
}

export default App;
