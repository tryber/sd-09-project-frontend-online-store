import React from 'react';

class EvaluetProduct extends React.Component {
  constructor() {
    super();
    this.addComments = this.addComments.bind(this);
    this.addValueComment = this.addValueComment.bind(this);
    this.addLocalStorage = this.addLocalStorage.bind(this);
    this.state = {
      valueComment: '',
      comments: [],
    };
  }

  componentDidMount() {
    this.addLocalStorage();
  }

  addLocalStorage() {
    const key = JSON.parse(localStorage.getItem('comments'));
    if (key) {
      this.setState({ comments: key });
    }
  }

  addValueComment(event) {
    if (event.target.name === 'commit') {
      this.setState({
        valueComment: event.target.value,
      });
    }
  }

  addComments() {
    this.setState(({ comments, valueComment }) => ({
      comments: [...comments, valueComment], valueComment: '',
    }));
    const { comments } = this.state;
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  render() {
    const { comments, valueComment } = this.state;
    return (
      <div>
        <div>
          <h2>Comentários</h2>
          {comments.map((comment, index) => (<p key={ index }>{comment}</p>))}
        </div>
        <form>
          <input placeholder="E-Mail" type="text" name="email" />
          <input
            type="number"
            placeholder="Nota"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
          />
          <textarea
            onChange={ this.addValueComment }
            data-testid="product-detail-evaluation"
            name="commit"
            value={ valueComment }
            placeholder="Mensagem(opcional)"
            type="text"
          />
          <button onClick={ this.addComments } type="button">Enviar</button>
        </form>
      </div>
    );
  }
}

export default EvaluetProduct;
