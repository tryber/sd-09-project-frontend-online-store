import React from 'react';
import Proptypes from 'prop-types';

class Evaluation extends React.Component {
  render() {
    const { emailUser, textComment } = this.props;
    return (
      <div>
        <p>{ emailUser }</p>
        <p>{ textComment }</p>
      </div>
    );
  }
}

Evaluation.propTypes = {
  emailUser: Proptypes.string.isRequired,
  textComment: Proptypes.string.isRequired,
};

export default Evaluation;
