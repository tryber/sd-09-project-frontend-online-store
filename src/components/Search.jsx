import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      getInputValue: props.getInputValue,
    };
    this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput({ target }) {
    const { getInputValue } = this.state;
    const { value } = target;
    this.setState((lastState) => ({
      ...lastState,
      inputValue: value,
    }));
    getInputValue(value);
  }

  render() {
    const { getProductsFromQuery } = this.props;
    const { inputValue } = this.state;

    return (
      <form className="form">
        <input
          data-testid="query-input"
          type="text"
          name="input"
          value={ inputValue }
          onChange={ this.HandleInput }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => getProductsFromQuery('', inputValue) }
        >
          Buscar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </form>
    );
  }
}

Search.propTypes = {
  getProductsFromQuery: PropTypes.func.isRequired,
  getInputValue: PropTypes.func.isRequired,
};

export default Search;
