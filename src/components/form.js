import React from 'react';
import { Link } from 'react-router-dom';

export default class IndexPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Todos los artículos</h1>
        <Link to="/new" className="btn btn-success">
          Nuevo artículo
        </Link>
      </div>
    );
  }
}
