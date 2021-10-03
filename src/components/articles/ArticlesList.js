const ArticlesList = ({ articles }) => {

  return (
    <div className="ArticlesList">
      {articles.map(article => (
        <div className='article' key={article._id}>

          <img src="http://place-puppy.com/500x200" alt={article.title} />
          <div className="content">
            <h2>
              {/* <a href={`/article/${article._id}`}>{article.title}</a> */}
              <a href={`/article/${article._id}`}>
                How to center a div in css the easy way?
              </a>
            </h2>
            <p className='cc'>{article.author} | {new Date(article.date).toDateString()}</p>
            {/* <p className='summary'>{article.intro}</p> */}
            <p className='summary'> Lorem adipisicing elit. Facere, accusantium vero qui neque sequi optio atque laborum eveniet perferendis consequatur vel ratione, dolorem modi velit aliquam et ipsa porro? Pariatur. </p>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default ArticlesList