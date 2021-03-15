import React, { Component } from 'react';
import './RatingForm.css';

export default class RatingForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="input-email" className="email-label">
          Email:
          <input
            type="text"
            id="input-email"
            placeholder="exemplo@gmail.com"
            className="email-input"
          />
        </label>
        <p>Deixe sua nota</p>
        <select htmlFor="input-rating" className="rating-select">
          <option value="1" id="input-rating">1</option>
          <option value="2" id="input-rating">2</option>
          <option value="3" id="input-rating">3</option>
          <option value="4" id="input-rating">4</option>
          <option value="5" id="input-rating">5</option>
        </select>
        <br />
        <br />
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Deixe aqui sua opinião do produto (opcional)"
          className="rating-textarea"
        />
        <br />
        <br />
        <button type="button">Enviar Avaliação</button>
      </form>
    );
  }
}
