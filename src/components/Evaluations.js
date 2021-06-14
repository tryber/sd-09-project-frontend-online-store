import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Evaluations extends Component {
  render() {
    const star = 'https://img.icons8.com/material-sharp/24/4a90e2/star--v2.png';
    const { evaluations } = this.props;
    if (!evaluations) return <p>Produto sem avalaições</p>;
    return (
      evaluations.map((evaluation) => (
        <div className="msgEvaluation" key={ evaluation.email }>
          <span>{ evaluation.email }</span>
          <div>
            <img
              src={ star }
              alt="star"
            />
            <img
              src={ star }
              alt="star"
            />
            <img
              src={ star }
              alt="star"
            />
          </div>
          <p>{ evaluation.message }</p>
        </div>))
    );
  }
}

Evaluations.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.string),
}.isRequered;

export default Evaluations;
