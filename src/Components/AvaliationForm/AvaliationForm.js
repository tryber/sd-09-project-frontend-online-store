import React, { Component } from 'react';
import './AvaliationForm.css';

class AvaliationForm extends Component {
  render() {
    return (
      <div>
        <h3>Avaliações</h3>
        <form className="avaliationFormContainer">
          <div>
            <input type="email" placeholder="Email" required />
          </div>
          <textarea
            placeholder="Mensagem (opcional)"
            cols="50"
            rows="5"
            data-testid="product-detail-evaluation"
          />
          <button type="submit">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default AvaliationForm;
