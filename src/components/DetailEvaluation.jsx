import React from 'react';

class DetailEvaluation extends React.Component {
  constructor(props) {
    super(props);
    this.onEvaluationTextChange = this.onEvaluationTextChange.bind(this);
    this.state = {
      evaluationText: '',
    };
  }

  onEvaluationTextChange(event) {
    const { value } = event.target;
    this.setState({
      evaluationText: value,
    });
  }

  render() {
    const { evaluationText } = this.state;
    return (
      <div>
        <form>
          <textarea
            data-testid="product-detail-evaluation"
            cols="30"
            rows="10"
            value={ evaluationText }
            onChange={ this.onEvaluationTextChange }
          >
            Avaliações
          </textarea>
          <button type="button">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default DetailEvaluation;
