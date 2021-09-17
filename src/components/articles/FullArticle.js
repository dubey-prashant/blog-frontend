import Loader from '../Loader'
import { useHistory, useParams } from "react-router"
import { Link } from "react-router-dom"
import useFetch from "../../js/useFetch"
import marked from 'marked'
import MetaInfo from "../partials/MetaInfo"
import swal from "sweetalert"

const FullArticle = () => {

  const { id } = useParams()
  const history = useHistory()

  const dataURL = `/api/articles/${id}`
  const { data: article, isLoading, error } = useFetch(dataURL)

  // Function for delete request start
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
  // Function for delete request end

  return (
    <div className="container">
      {isLoading && <Loader />}
      {!isLoading && <>{error && <div className='errorDiv'>{error}</div>}
        {article &&
          <div className="Article">
            {/* MetaInfo */}
            <MetaInfo
              title={article.title}
              keywords={article.keywords}
              description={article.description}
            />
            <h2 className="title">
              {article.title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: marked(article.content) }} className="articleBody"></div>
            <br />
            <br />
            <p className="author">
              Author - {article.author}.
            </p>
            <button><Link to={`/update/${article._id}`}>Update</Link></button>
            <button onClick={handleDelete}>delete</button>
          </div>
        }</>
      }
    </div>
  )
}

export default FullArticle