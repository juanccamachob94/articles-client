import React from 'react';
import { Link } from 'react-router-dom';
import { deleteArticle } from '../requests/articles';

export default class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.removeArticle = this.removeArticle.bind(this);

  }

  removeArticle() {
    deleteArticle(this.props.article.id);
  }

  render() {
    return(
      <div className="ActiveCard col-md-6">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{this.props.article.title}</h3>
            <small className="card-text">{this.props.article.content}</small>
            <br/>
            <a className="btn btn-danger btn-remove-article float-end" onClick={ this.removeArticle }>
              Borrar
            </a>
          </div>
        </div>
      </div>
    );
  }
}
