import React from 'react';

class RateProducts extends React.Component {
  render() {
    return (
      <section>
        <form>
          <h3>Avaliações</h3>
          <input
            type="text"
            name="user"
            placeholder="nome de usuário"
          />
          <input
            type="number"
            min="0"
            max="5"
            name="rating"
          />
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Escreva uma avaliação"
          />
          <button
            type="submit"
          >
            Enviar
          </button>
        </form>
      </section>
    );
  }
}

export default RateProducts;
