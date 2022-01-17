import React from "react";
import "./styles.css"


constructor
class FormularioCadastro extends React.Component {
  handleMudancaTitulo(evento){       // vai receber por parametro um evento (evento)
    console.log(evento.target.value)
  }

  render() {
    return (
      <form className="form-cadastro">
        <input 
        className="form-cadastro__input" 
        type="text" 
        placeholder="título" 
        onChange={this.handleMudancaTitulo}   //quando for disparado irá chamar uma função
        />
        <textarea placeholder="escreva sua nota" />
        <button className="form-cadastro__submit form-cadastro__input">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;