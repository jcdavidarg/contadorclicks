import React from "react";
import "../stylesheets/Boton.css";

class Boton extends React.Component {
  render() {
    return (
      <button
        className={this.props.esBotonDeClick ? "boton-clic" : "boton-reiniciar"}
        onClick={this.props.manejarClic}
      >
        {this.props.texto}
      </button>
    );
  }
}

export default Boton;
