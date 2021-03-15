import React from 'react';
import PropTypes from 'prop-types';
import ProductDetails from '../components/ProductDetails';
import Evaluation from '../components/Evaluation';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      evaluations: [],
      emailUser: '',
      textComment: '',
      productId: props.match.params.id,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeTextComent = this.handleChangeTextComent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.getDataFromLocalStorage = this.getDataFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getDataFromLocalStorage();
  }

  handleChangeEmail(event) {
    this.setState({
      emailUser: event.target.value,
    });
  }

  handleChangeTextComent(event) {
    this.setState({
      textComment: event.target.value,
    });
  }

  handleSubmit(event) {
    this.saveProductToLocalStorage();
    event.preventDefault();
  }

  async getDataFromLocalStorage() {
    const { productId } = this.state;
    if (localStorage.getItem(`evaluation-${productId}`)) {
      const data = JSON.parse(localStorage.getItem(`evaluation-${productId}`));
      console.log(data);
      this.setState({ evaluations: data });
    }
  }

  saveProductToLocalStorage() {
    const { emailUser, textComment, evaluations, productId } = this.state;
    evaluations.push({ emailUser, textComment });

    localStorage.setItem(`evaluation-${productId}`, JSON.stringify(evaluations));

    this.setState({
      evaluations,
      emailUser: '',
      textComment: '',
    });
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { emailUser, textComment, evaluations } = this.state;
    const { title, condition } = product;

    return (
      <div>
        <ProductDetails
          title={ title }
          condition={ condition }
          product={ product }
        />
        <div>
          <form onSubmit={ this.handleSubmit }>
            <h1>Avaliações</h1>
            <input
              type="email"
              name="emailUser"
              placeholder="email"
              value={ emailUser }
              onChange={ this.handleChangeEmail }
              isRequired
            />
            <input type="radio" name="nota" id="nota1" value="nota1" />
            <input type="radio" name="nota" id="nota2" value="nota2" />
            <input type="radio" name="nota" id="nota3" value="nota3" />
            <input type="radio" name="nota" id="nota4" value="nota4" />
            <input type="radio" name="nota" id="nota5" value="nota5" />
            <textarea
              name="textComment"
              value={ textComment }
              onChange={ this.handleChangeTextComent }
              data-testid="product-detail-evaluation"
            >
              Mensagem(opcional)
            </textarea>
            <input type="submit" value="Avaliar" />
          </form>
        </div>
        { evaluations.map((evaluation) => (
          <Evaluation
            key={ evaluation.emailUser }
            emailUser={ evaluation.emailUser }
            textComment={ evaluation.textComment }
          />))}
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.objectOf({}),
}.isRequired;

export default Details;
