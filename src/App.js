import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0,
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reniciarContador = this.reniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reniciarContador() {
    this.setState({ numClics: 0 });
  }

  render() {
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
          <Contador numClics={this.state.numClics} />
          <Boton
            texto="Click"
            esBotonDeClick={true}
            manejarClic={this.manejarClic}
          />
          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClic={this.reniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;
