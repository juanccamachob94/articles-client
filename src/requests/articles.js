function getArticles() {
  return fetch('https://articles-api-1.herokuapp.com/api/articles').then(data => {
    return data.json();
  }).catch(console.log);
}

function deleteArticle(id) {
  fetch('https://articles-api-1.herokuapp.com/api/articles/' + id,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    }
  ).then(data => { return data.json(); })
  .catch(console.log);
}

function createArticle(title, content) {
  fetch('https://articles-api-1.herokuapp.com/api/articles',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ title: title, content: content })
    }
  )
}

export { getArticles, deleteArticle, createArticle };
