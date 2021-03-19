import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ButtonAdd extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { product } = this.props;
    Object.entries(product).map((curr) => localStorage.setItem(curr[0], curr[1]));
    localStorage.setItem('quantity', 1);
  }

  render() {
    const { id, idLink } = this.props;
    return (
      <button
        type="button"
        className="card-button"
        data-testid={ id }
        onClick={ this.handleClick }
      >
        <Link
          to="/ShoppingCart"
          type="submit"
          data-testid={ idLink }
        >
          Add to card
        </Link>
      </button>
    );
  }
}

ButtonAdd.defaultProps = {
  idLink: '',
};

ButtonAdd.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
  idLink: PropTypes.string,
};

export default ButtonAdd;
