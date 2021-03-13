import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loadingContainer">
        <div className="spinner" />
        Carregando...
      </div>
    );
  }
}

export default Loading;
