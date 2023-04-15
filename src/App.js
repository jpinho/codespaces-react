import { useEffect, useState } from 'react';
import './App.css';

const PUBLIC_GMAPS_KEY = 'AIzaSyACWsCQTJfbMBsVlBQ64LkP-2yn9Sr4Dpc';

function App() {
  const [zipCode, setZipCode] = useState("Im+MediaPark+Cologne")

  useEffect(() => {
    const zipCodeWatcher = window.setInterval(() => {
      const zipCodeEl = document.querySelector('div[name="zipCode"] input[type="text"]')
      
      if (zipCodeEl && zipCodeEl.value.trim().length > 0 && zipCodeEl.value !== zipCode) { 
        setZipCode(zipCodeEl.value) 
      }
    }, 100);

    return () => {
      clearInterval(zipCodeWatcher)
    }
  }, [setZipCode])

  return (
    <div className="App">
      <iframe
        title="Google Maps"
        width="100%"
        height="450"
        style={{ border:0 }}
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${PUBLIC_GMAPS_KEY}&q=${zipCode}`}>
      </iframe>
    </div>
  );
}

export default App;
