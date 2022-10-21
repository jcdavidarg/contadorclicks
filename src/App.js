import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freecodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Click" esBotonDeClick={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClic={reniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
