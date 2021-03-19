import React from 'react';

require('./EvaluationForms.css');

export default class EvaluationForms extends React.Component {
  evaluator() {
    console.log('teste');
  }

  render() {
    return (
      <div>
        <p>
          <b>
            Avaliações
          </b>
        </p>
        <section className="content">
          <input type="text" placeholder="E-mail" />
          <br />
          <textarea
            type="input"
            data-testid="product-detail-evaluation"
            className="evaluation-coment"
            placeholder="Mensagem (opcional)"
          />
          <br />
          <button type="submit" onClick={ this.evaluator }>Avaliar</button>
        </section>
      </div>
    );
  }
}
