import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/article-card';
import { getArticles } from '../requests/articles';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.loadArticles();
  }

  articles = () => {
    return this.state.articles.map((article, index) => {
      return <ArticleCard article={article} key={index}/>
    });
  }

  loadArticles = () => {
    getArticles().then(jsonR => {
      this.setState({ articles: jsonR });
    })
  }

  render() {
    return(
      <div>
        <div className="container">
          <h2>Artículos</h2>
          <Link to="/new">
            <button className="btn btn-success">Nuevo artículo</button>
          </Link>
        </div>
        <div className="ArticlesContainer container">
          <div className="row">
            {this.articles()}
          </div>
        </div>
      </div>
    );
  }
}
