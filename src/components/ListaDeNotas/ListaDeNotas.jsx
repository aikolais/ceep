import React from "react";
import CardNota from "../CardNota";
import "./styles.css";

export class ListaDeNotas extends React.Component {
  render() {
    return (
      <ul className="lista-notas">{Array.of("Trabalho", "Estudo", "Trabalho").map((categoria, index) => { //array of tá criando esse array pra mim, depois tá percorrendo esse array e colocando como parametro, criando ali, a categoria como argumento. 
          return (
        <li className="lista-notas__item" key={index}>
          <CardNota />
        </li>
          );
      })}
      </ul>
    );
  }
}

export default ListaDeNotas;