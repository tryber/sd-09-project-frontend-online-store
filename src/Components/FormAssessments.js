import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class FormAssessment extends React.Component {
  constructor(props) {
    super(props);

    this.formAssessment = this.formAssessment.bind(this);
    this.saveAssessments = this.saveAssessments.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.returnAssessments = this.returnAssessments.bind(this);

    this.state = {
      storage: {
        email: '',
        mensagem: '',
        rating: 0,
      },
      allStorage: [],
    };
  }

  // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react

  handleChange({ target }) {
    const { value, name } = target;
    this.setState(
      (prevState) => ({
        storage: {
          ...prevState.storage,
          [name]: value,
        },
      }),
    );
  }

  formAssessment() {
    const { storage: { email, mensagem } } = this.state;
    return (
      <form className="form-assessments">
        <div>
          <input
            type="text"
            name="email"
            value={ email }
            placeholder="Email"
            required
            onChange={ this.handleChange }
          />
          <span>stars</span>
        </div>
        <textarea
          className="textarea-assessments"
          name="mensagem"
          value={ mensagem }
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
          onChange={ this.handleChange }
        />
        <button
          className="button-assessments"
          type="button"
          onClick={ this.saveAssessments }
        >
          Avaliar
        </button>
      </form>
    );
  }

  saveAssessments() {
    const { id } = this.props;
    const { storage, allStorage } = this.state;
    console.log(storage);
    this.setState(
      { allStorage: [...allStorage, storage] },
      localStorage.setItem(id, JSON.stringify(allStorage)),
    );
  }

  returnAssessments() {
    const { id } = this.props;
    const resultAssessments = JSON.parse(localStorage.getItem(id));
    if (!resultAssessments) return;

    return (
      <div>
        { resultAssessments.map((assessment, index) => (
          <div key={ index } className="assessment-card">
            <div className="assessment-div">
              <p className="assessment-email">{assessment.email}</p>
              <p>Rating</p>
            </div>
            <p className="assessment-mensagem">{assessment.mensagem}</p>
          </div>
        )) }
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.formAssessment() }
        { this.returnAssessments() }
      </div>
    );
  }
}

FormAssessment.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FormAssessment;
