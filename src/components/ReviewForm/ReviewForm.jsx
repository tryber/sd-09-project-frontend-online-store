import React, { Component } from 'react';
import { func, string } from 'prop-types';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Rating from '../Rating';

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      messageInput: '',
      rating: 0,
      emptyEmailInput: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleRatingUpdate = this.handleRatingUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(parentState, value) {
    this.setState({ [parentState]: value });
  }

  handleRatingUpdate(rating) {
    this.setState({ rating });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onSubmitForm, id } = this.props;
    const { emailInput, messageInput, rating } = this.state;
    if (!emailInput.length) {
      this.setState({ emptyEmailInput: true });
    } else {
      this.setState({
        emptyEmailInput: false,
        emailInput: '',
        messageInput: '',
        rating: 0,
      });
      onSubmitForm({ id, review: { email: emailInput, message: messageInput, rating } });
    }
  }

  render() {
    const { emailInput, messageInput, emptyEmailInput, rating } = this.state;

    return (
      <form>
        <Rating
          readOnly={ false }
          onHandleRatingUpdate={ this.handleRatingUpdate }
          value={ rating }
        />
        {
          emptyEmailInput
            ? <p>Este campo é obrigatório!</p>
            : null
        }
        <FormGroup
          dataTestId={ false }
          label="E-mail"
          type="email"
          id="email-input"
          parentState="emailInput"
          value={ emailInput }
          onHandleChange={ this.handleInput }
        />
        <FormGroup
          dataTestId
          label="Mensagem (opcional)"
          type="textarea"
          id="product-detail-evaluation"
          parentState="messageInput"
          value={ messageInput }
          onHandleChange={ this.handleInput }
        />
        <Button
          dataTestId={ false }
          submit
          id="submit-review-btn"
          onHandleClick={ this.handleSubmit }
        >
          Avaliar
        </Button>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  onSubmitForm: func.isRequired,
  id: string.isRequired,
};
