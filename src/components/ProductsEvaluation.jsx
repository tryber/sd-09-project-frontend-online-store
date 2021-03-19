import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsEvaluation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: '',
      select: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.retrieveLocalStorage = this.retrieveLocalStorage.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { comments, select, email } = this.state;
    const { itemId } = this.props;
    localStorage.setItem(
      [`${itemId}_avaliation_${email}`], JSON.stringify({ comments, select, email }),
    );
    this.setState({
      comments: '',
      select: '',
      email: '',
    });
  }

  retrieveLocalStorage() {
    const keys = Object.keys(localStorage)
      .filter((item) => item.includes('_avaliation_'));
    const evalutions = keys.map((key) => {
      const result = JSON.parse(localStorage.getItem(key));
      return (
        <section key={ key }>
          <p>{ `E-mail: ${result.email}` }</p>
          <p>{ `Nota: ${result.select}` }</p>
          <p>{ `Avaliação: ${result.comments}` }</p>
        </section>
      );
    });
    return evalutions;
  }

  render() {
    const { comments, email, select } = this.state;

    return (
      <>
        <form>
          <label htmlFor="email">
            Digite seu e-mail:
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="select">
            Dê a sua Nota!:
            <select
              name="select"
              value={ select }
              onChange={ this.handleChange }
            >
              <option value="" className="star-quantity">Escolha sua Avaliação</option>
              <option value="1" className="star-quantity">1</option>
              <option value="2" className="star-quantity">2</option>
              <option value="3" className="star-quantity">3</option>
              <option value="4" className="star-quantity">4</option>
              <option value="5" className="star-quantity">5</option>
            </select>
          </label>
          <br />
          <label htmlFor="comments">
            Comentarios:
            <textarea
              placeholder="Digite seu comentário!"
              name="comments"
              value={ comments }
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
            />
          </label>
          <button type="submit" onClick={ this.handleSubmit }>Salvar Avaliação</button>
        </form>
        <section>
          { this.retrieveLocalStorage() }
        </section>
      </>
    );
  }
}

ProductsEvaluation.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default ProductsEvaluation;
