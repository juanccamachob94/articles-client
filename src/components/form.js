import React from 'react';
import { Link } from 'react-router-dom';
import { createArticle } from '../requests/articles';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    };
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  handleContent = (e) => {
    this.setState({ content: e.target.value });
  }

  handleSubmit = (event) => {
   event.preventDefault();
   createArticle(this.state.title, this.state.content);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title">Título</label>
          <input type="text" name="title" value={this.state.title} className="form-control" onChange={this.handleTitle} placeholder="Artículo 1"/>
        </div>
        <div className="mb-3">
          <label htmlFor="content">Contenido</label>
          <textarea type="text" name="content" className="form-control" onChange={this.handleContent} value={this.state.content} placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        </div>
        <div className="mb-3">
          <input type="submit" value="Guardar" className="btn btn-primary btn-save-article float-end"/>
        </div>
      </form>
    );
  }
}
