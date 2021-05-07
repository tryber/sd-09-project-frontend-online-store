import React from 'react';

class FeedbackProducts extends React.Component {
  render() {
    return (
      <div>
        <h1>Avaliações do Produto</h1>
        <input name="email" type="email" placeholder="Email" />
        <textarea
          data-testid="product-detail-evaluation"
          name="message"
          type="text"
          placeholder="Opinião sobre o produto"
        />
        <button type="button">Avaliar</button>
      </div>
    );
  }
}

export default FeedbackProducts;
