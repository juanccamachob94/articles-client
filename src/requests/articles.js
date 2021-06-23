function getArticles() {
  return fetch('https://articles-api-1.herokuapp.com/api/articles').then(data => {
    return data.json();
  }).catch(console.log);
}

function deleteArticle(id) {
  fetch('https://articles-api-1.herokuapp.com/api/articles/' + id,
    {
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    }
  )
}
export { getArticles, deleteArticle };
