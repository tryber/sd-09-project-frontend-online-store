import React from 'react';

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      rating: 0,
      comment: '',
    };
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, rating, comment } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            E-mail
            <input
              type="email"
              required
              placeholder="E-mail"
              value={ email }
              onChange={ (event) => this.handleChange('email', event.target.value) }
            />
          </label>
          <label htmlFor="rating-input">
            Avaliação
            <input
              type="number"
              min={ 0 }
              max={ 5 }
              step={ 0.1 }
              value={ rating }
              onChange={ (event) => this.handleChange('rating', event.target.value) }
            />
          </label>
          <label htmlFor="comment-input">
            Comentários
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Comentários"
              value={ comment }
              rows="5"
              cols="20"
              onChange={ (event) => this.handleChange('comment', event.target.value) }
            />
          </label>
          <button
            type="button"
          >
            Enviar Avaliação
          </button>
        </form>
      </div>
    );
  }
}

export default RatingForm;
