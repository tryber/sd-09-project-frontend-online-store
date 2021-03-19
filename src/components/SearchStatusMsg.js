import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchStatusMsg extends Component {
  render() {
    const { text } = this.props;

    return (
      <p data-testid="home-initial-message">
        { text }
      </p>
    );
  }
}

SearchStatusMsg.propTypes = {
  text: PropTypes.string,
};

SearchStatusMsg.defaultProps = {
  text: 'Nenhuma informação foi fornecida.',
};
