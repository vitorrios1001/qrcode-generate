import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import ReactGa from 'react-ga'

import { useGAEvents } from './hooks/useGAEvents'

import './style.css';

const network = [
  {
    href: 'https://github.com/vitorrios1001',
    icon: 'fa fa-github',
    name: 'github'
  },
  {
    href: 'https://www.instagram.com/vitorluizrios/',
    icon: 'fa fa-instagram',
    name: 'instagram'
  },
  {
    href: 'https://www.linkedin.com/in/vitorluizrios',
    icon: 'fa fa-linkedin',
    name: 'linkedin'
  },
  {
    href: 'https://www.facebook.com/vitorluizrios',
    icon: 'fa fa-facebook-f',
    name: 'facebook'
  },
];

ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_CODE)

const App = () => {
  const route = window.location.pathname + window.location.search

  console.log('route::', route)

  const GAEvents = useGAEvents('External Links')

  React.useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  const [qrcode, setQrcode] = useState(
    'https://br.linkedin.com/in/vitorluizrios'
  );

  const [field, setField] = useState('');

  const handleQrCode = (e) => {
    setField(e.target.value);
  };

  const generateQrCode = (e) => {
    e.preventDefault();
    setQrcode(field);
  };

  const clear = () => setField('');

  return (
    <div className='container'>
      <header>
        <h2>
          <i className='fa fa-qrcode' /> QRCode Generator
        </h2>
      </header>

      <div className='container-qr-code'>
        <div className='qr-code' onClick={() => GAEvents('click', 'qrcode')}>
          <QRCode size={250} value={qrcode} />
        </div>
        <span className='result'>Generated: {qrcode}</span>
      </div>

      <form onSubmit={generateQrCode}>
        <input
          placeholder='Value'
          name='field'
          value={field}
          onChange={handleQrCode}
        />
        <div className='buttons'>
          <button className='button-clear' type='button' onClick={clear}>
            <i className='fa fa-trash' />
          </button>
          <button type='submit' className='button-generate'>
            <i className='fa fa-magic' /> Generate
          </button>
        </div>
      </form>

      <footer>
        <h5>Produced by: Vitor Rios</h5>
        <div className='network'>
          {network.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => GAEvents(item.name, item.href)}
            >
              <i className={item.icon} />
            </a>
          ))}
        </div>
        {/* <a href='https://github.com/vitorrios1001' target="_blank">github/vitorrios1001</a> */}
      </footer>
    </div>
  );
};

export default App;
