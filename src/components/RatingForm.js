import React from 'react';

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rating: 0,
      comment: '',
    };
    this.updateForm = this.updateForm.bind(this);
    this.renderCommentInput = this.renderCommentInput.bind(this);
    this.renderRatingInput = this.renderRatingInput.bind(this);
    this.renderEmailInput = this.renderEmailInput.bind(this);
  }

  updateForm(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <div>
        <label htmlFor="email-form">
          E-mail
          <input
            type="email"
            placeholder="Insira seu e-mail"
            isRequired
            value={ email }
            onChange={ (event) => this.updateForm('email', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="comment-form">
          Nota
          <input
            type="number"
            isRequired
            value={ rating }
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            onChange={ (event) => this.updateForm('rating', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderCommentInput() {
    const { comment } = this.state;
    return (
      <div>
        <label htmlFor="rating-form">
          Comentários
          <textarea
            placeholder="Comentários (opcional)"
            cols="40"
            rows="4"
            value={ comment }
            data-testid="product-detail-evaluation"
            onChange={ (event) => this.updateForm('comment', event.target.value) }
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Avaliações</h2>
        <form className="rating-form">
          {this.renderEmailInput()}
          {this.renderRatingInput()}
          {this.renderCommentInput()}
          <button type="button">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default RatingForm;
