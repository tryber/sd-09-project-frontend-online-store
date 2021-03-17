import React, { Component } from 'react';

class EvaluatorForm extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      mensagem: '',
      avaliacao: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveAvaluation = this.saveEvaluation.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  saveEvaluation() {
    localStorage.setItem('rating', JSON.stringify(this.state));
  }

  render() {
    return (
      <form>
        <fieldset>
          <input
            placeholder="Nome"
            type="text"
            onChange={ this.handleChange }
            name="nome"
          />
          <textarea
            placeholder="Mensagem (opcional)"
            data-testid="product-detail-evaluation"
            name="mensagem"
            onChange={ this.handleChange }
          />
          <label htmlFor="star-rating">
            Avaliação:
            <input
              type="number"
              min="1"
              max="5"
              id="star-rating"
              required
              name="avaliacao"
              onChange={ this.handleChange }
            />
          </label>
          <button type="button" onClick={ this.saveEvaluation }>Avaliar</button>
        </fieldset>
      </form>
    );
  }
}

export default EvaluatorForm;
