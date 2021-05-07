import React from 'react';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import SearchField from './SearchField';

class SearchForm extends React.Component {
  render() {
    const { submitCallback, handleInputChange } = this.props;
    return (
      <form onSubmit={ submitCallback }>
        <SearchField handleInputChange={ handleInputChange } />
        <SearchButton title="Pesquisar" sumbitCallback={ submitCallback } />
      </form>
    );
  }
}

SearchForm.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default SearchForm;
