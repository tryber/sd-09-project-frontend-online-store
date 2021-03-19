import React from 'react';
import Ratings from './Ratings';

class ProductEvaluation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      evaluations: [],
      showEvaluations: false,
    };
    this.saveEvaluationState = this.saveEvaluationState.bind(this);
    this.saveEvaluation = this.saveEvaluation.bind(this);
    this.addEvaluationToStorage = this.addEvaluationToStorage.bind(this);
  }

  componentDidMount() {
    this.getEvaluationsFromStorage();
  }

  componentDidUpdate() {
    this.addEvaluationToStorage();
  }

  getEvaluationsFromStorage() {
    const evaluations = JSON.parse(localStorage.getItem('evaluations' || '[]'));
    if (evaluations) {
      this.setState({
        evaluations,
        showEvaluations: true,
      });
    }
  }

  saveEvaluationState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveEvaluation() {
    const { email, message } = this.state;
    const evaluationObj = { email, message };
    this.setState(({ evaluations }) => (
      { showEvaluations: true, evaluations: [...evaluations, evaluationObj] }));
  }

  addEvaluationToStorage() {
    const { evaluations } = this.state;
    localStorage.setItem('evaluations', JSON.stringify(evaluations));
  }

  render() {
    const { evaluations, showEvaluations } = this.state;
    const ratingMessage = <p>Seja o primeiro a avaliar</p>;
    return (
      <div>
        <h3>Avaliações</h3>
        <form>
          <div>
            <span name="1" className="fa fa-star" />
            <span name="2" className="fa fa-star" />
            <span name="3" className="fa fa-star" />
            <span name="4" className="fa fa-star" />
            <span name="5" className="fa fa-star" />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={ this.saveEvaluationState }
            required
          />
          <br />
          <textarea
            name="message"
            placeholder=" Mensagem(Opcional)"
            data-testid="product-detail-evaluation"
            onChange={ this.saveEvaluationState }
          />
        </form>
        <button type="submit" onClick={ this.saveEvaluation }>Avaliar</button>
        <br />
        <div>
          {showEvaluations ? evaluations.map((evalutionObj) => (
            <Ratings key={ evalutionObj.email } ratings={ evalutionObj } />
          ))
            : ratingMessage }
        </div>
      </div>
    );
  }
}
export default ProductEvaluation;
