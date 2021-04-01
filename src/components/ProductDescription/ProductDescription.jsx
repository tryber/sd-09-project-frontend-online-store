import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';

export default class ProductDescription extends Component {
  render() {
    const { attributes } = this.props;

    return (
      <section>
        <h4>Descrição</h4>
        <ul>
          {
            attributes.map(({ name, value_name: value }) => (
              <li key={ name }>
                <strong>{`${name}: `}</strong>
                { value}
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
}

ProductDescription.propTypes = {
  attributes: arrayOf(shape({
    name: string.isRequired,
    value_name: string.isRequired,
  })).isRequired,
};
