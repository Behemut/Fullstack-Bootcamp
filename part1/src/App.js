import './App.css';
import { useState } from 'react';

function App() {
  const [mensaje, setmensaje] = useState("hola aplicacion")
  return (
    <div className="App">
      {mensaje  }
      
    </div>
  );
}

export default App;
