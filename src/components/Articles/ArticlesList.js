const ArticlesList = ({ articles }) => {

  return (
    <div className="ArticlesList">
      {articles.map(article => (
        <div className='article' key={article._id}>

          <img src="http://place-puppy.com/500x200" alt={article.title} />
          <div className="content">
            <h2>
              <a href={`/article/${article._id}`}>
                {article.title}
              </a>
            </h2>
            <p className='cc'>{article.author} | {new Date(article.date).toDateString()}</p>
            <p className='summary'>{article.intro}</p>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default ArticlesList