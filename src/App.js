import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [zipCode, setZipCode] = useState("Im+MediaPark+Cologne")

  useEffect(() => {
    const zipCodeWatcher = window.setInterval(() => {
      const zipCodeEl = document.querySelector('div[name="zipCode"] input[type="text"]')
      
      if (zipCodeEl && zipCodeEl.value.trim().length > 0) { 
        setZipCode(zipCodeEl.value) 
      }
    }, 100);

    return () => {
      clearInterval(zipCodeWatcher)
    }
  }, [setZipCode])

  return (
    <div className="App">
      <h1>Welcome to epilot-maps custom block app!</h1>
      <h2>Brought to you from GitHub Codespaces & Surge.sh</h2>

      <hr />

      {zipCode}

      <iframe
        title="google maps"
        width="100%"
        height="450"
        style={{ border:0 }}
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyACWsCQTJfbMBsVlBQ64LkP-2yn9Sr4Dpc&q=${zipCode}`}>
      </iframe>
    </div>
  );
}

export default App;
