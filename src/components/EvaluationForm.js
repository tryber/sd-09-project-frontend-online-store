import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(name, { target: { value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  render() {
    return (
      <div className="evaluation">
        <h3>Avaliações</h3>
        <form className="formEvaluation">
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="email@email.com"
              onChange={ (event) => this.handleChange('email', event) }
              required
            />
          </label>
          <label htmlFor="message">
            <textarea
              id="message"
              placeholder="Mensagem de avaliação (opcional)"
              onChange={ (event) => this.handleChange('message', event) }
              data-testid="product-detail-evaluation"
            />
          </label>
          <button type="button" onClick={ this.handleClick }>
            Adicionar avaliação
          </button>
        </form>
      </div>
    );
  }
}

EvaluationFrom.propTypes = {
  onSubmit: PropTypes.func,
}.isRequered;

export default EvaluationFrom;
