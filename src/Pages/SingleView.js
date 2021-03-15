import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormAssessment from '../Components/FormAssessments';
import imgKart from '../Images/botaoCarrinho.jpg';
import './Pages.css';

class ProductDetails extends React.Component {
  buttonAddAndRemove(param, name) {
    return (
      <button
        type="button"
        onClick={ () => console.log(param) }
      >
        {name}
      </button>
    );
  }

  render() {
    const { location: { state }, totalCart, totalCartNumber } = this.props;
    if (!state) return <Redirect to="/" />;
    const { title, price, thumbnail, id } = state.product;

    return (
      <div className="main-details">
        {totalCartNumber()}
        <div className="nav-details">
          <Link to="/">&#8678;</Link>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <img src={ imgKart } alt="ShopCartImg" />
          </Link>
        </div>
        <section className="main-shoppingCart">
          <h2 data-testid="product-detail-name">{`${title} - R$ ${price}`}</h2>
          <div className="img-details">
            <img src={ thumbnail } alt={ title } />
            <div className="product-details">
              <h3>Especificações tecnicas</h3>
              <p>Produto muito bom, compre logo.</p>
            </div>
          </div>
        </section>
        <section className="section-addCart">
          <h2>Quantidade</h2>
          <div className="section-button-AddCart">
            { this.buttonAddAndRemove('Remove', '-') }
            <p>Number</p>
            { this.buttonAddAndRemove('Adicionar', '+') }
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => totalCart(state.product) }
            >
              Adicionar no Carrinho
            </button>
          </div>
        </section>
        <section className="section-assessments">
          <h2>Avaliações</h2>
          <FormAssessment id={ id } />
        </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
  totalCart: PropTypes.func.isRequired,
  totalCartNumber: PropTypes.func.isRequired,
};

export default ProductDetails;
