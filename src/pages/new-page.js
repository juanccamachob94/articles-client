import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/form';

export default class NewPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Nuevo artículo</h1>
        <Link to="/">
          <span>Regresar</span>
        </Link>
        <Form algo="dsa"/>
      </div>
    );
  }
}
