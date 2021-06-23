import React from 'react';
import { Link } from 'react-router-dom';

export default class EditPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Editar artículo</h1>
        <Link to="/">
          <span>Regresar</span>
        </Link>
      </div>
    );
  }
}
