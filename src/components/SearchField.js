import React from 'react';
import PropTypes from 'prop-types';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { handleInputChange } = this.props;
    return (
      <label htmlFor="search-field">
        <input
          data-testid="query-input"
          type="text"
          name="search-field"
          id="search-field"
          onChange={ handleInputChange }
        />
      </label>
    );
  }
}

SearchField.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};

export default SearchField;
