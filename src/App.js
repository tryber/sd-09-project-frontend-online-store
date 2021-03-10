import React from 'react';
import Pageinitial from './Pageinitial';

class App extends React.Component {
  render() {
    return (
      <div>
        <Pageinitial />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default App;
