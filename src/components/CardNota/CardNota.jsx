import React from 'react';
import './styles.css';

class CardNota extends React.Component {
    render() {
        return(
            <section className="card-nota">
          <header className="card-nota__cabecalho">
            <h3 className=".card-nota__titulo">Título</h3>
          </header>
          <p className="card-nota__texto">Escreva sua nota</p>
        </section>
        )
    }
}

export default CardNota;