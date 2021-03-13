import React, { Component } from 'react';

class ProductEvaluation extends Component {
  renderEmailInput() {
    return (
      <div>
        <input
          id="email"
          type="text"
          placeholder="Insira seu e-mail"
        />
      </div>
    );
  }

  renderTextArea() {
    return (
      <div>
        <textarea
          data-testid="product-detail-evaluation"
          id="text-area"
          placeholder="Mensagem (opcional)"
        />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <button
        type="button"
        onClick={ () => { } }
      >
        Enviar
      </button>
    );
  }

  render() {
    return (
      <form>
        { this.renderEmailInput() }
        { this.renderTextArea() }
        { this.renderSubmitButton() }
      </form>
    );
  }
}

export default ProductEvaluation;
