const ArticlesList = ({ articles }) => {

  return (
    <div className="ArticlesList">
      {articles.map(article => (
        <div className='article' key={article._id}>

          <img src="http://place-puppy.com/500x300" alt={article.title} />
          <div className="content">
            <h2>
              <a href={`/article/${article._id}`}>{article.title}</a>
            </h2>
            <p className='date'>{new Date(article.date).toDateString()} </p>
            {/* <p className='summary'>{article.intro}</p> */}
            <p className='summary'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium vero qui neque sequi optio atque laborum eveniet perferendis consequatur vel ratione, dolorem modi velit aliquam et ipsa porro? Pariatur. </p>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default ArticlesList