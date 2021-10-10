import Loader from '../Loader'
import { useHistory, useParams } from "react-router"
import { Link } from "react-router-dom"
import useFetch from "../../js/useFetch"
import marked from 'marked'
import MetaInfo from "../partials/MetaInfo"
import swal from 'sweetalert2'

const FullArticle = () => {

  const { id } = useParams()
  const history = useHistory()

  const dataURL = `/api/articles/${id}`
  const { data: article, isLoading, error } = useFetch(dataURL)

  // Function for delete request --start
  function handleDelete() {
    fetch(dataURL, {
      method: "DELETE"
    }).then(res => {
      if (!res.ok) {
        throw new Error(`couldn't reach there`)
      } else {
        swal(`Deleted successfully!`, "", "success")
        history.push('/')
      }
    }).catch(err => {
      console.log(err)
      swal("Error deleting!!!", `Error: ${err.message}`, "error")
    })
  }
  // Function for delete request --end

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && <>{error && <div className='errorDiv'>{error}</div>}
        {article &&
          <article className="FullArticle">
            {/* MetaInfo */}
            <MetaInfo
              title={article.title}
              keywords={article.keywords}
              description={article.description}
            />
            <h2 className="title">
              {article.title}
            </h2>
            <p className='cc'>{article.author} | {new Date(article.date).toDateString()}</p>
            <div dangerouslySetInnerHTML={{ __html: marked(article.content) }} className="articleBody">
            </div>

            <button><Link to={`/update/${article._id}`}>Update</Link></button>
            <button onClick={handleDelete}>delete</button>
          </article>
        }</>
      }
    </>
  )
}

export default FullArticle