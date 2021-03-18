import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FormDetails extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      rating: {
        values: [],
        comment: [],
      },
      value: 0,
      comment: '',
    };
    this.ratingSave = this.ratingSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  ratingSave(value, newComment) {
    const { id } = this.props;
    const { rating: { comment, values } } = this.state;
    this.setState({
      id,
      rating: {
        values: [...values, value],
        comment: [...comment, newComment],
      },
      value: 0,
      comment: '',
    });
  }

  showList(rating) {
    return (rating.values.length > 0 && rating.values.map((item, index) => (
      <section key={ index }>
        <li>
          Nota:
          <span>{item}</span>
        </li>
        <h4>{rating.comment[index]}</h4>
      </section>
    )));
  }

  render() {
    const { id } = this.state;
    const { value, comment, rating } = this.state;
    const { ratingSave } = this;
    return (
      <>
        <form>
          <label htmlFor="value">
            <input
              onChange={ this.handleChange }
              type="number"
              min="1"
              max="5"
              value={ value }
              id="value"
              name="value"
              required
            />
          </label>
          <span hidden>{id}</span>
          <label htmlFor="comment">
            <textarea
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
              name="comment"
              id="comment"
              value={ comment }
              placeholder="Mensagem (Opcional)"
            />
          </label>
          <button
            type="button"
            onClick={ () => { ratingSave(value, comment); } }
          >
            Adicionar
          </button>
        </form>
        <ul>
          {this.showList(rating)}
        </ul>
        <Link to="/">Home</Link>
      </>
    );
  }
}

FormDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FormDetails;
