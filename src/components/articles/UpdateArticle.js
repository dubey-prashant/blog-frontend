import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import ArticleFormField from "./articleFormField"

const UpdateArticle = () => {
  const { id } = useParams()
  const history = useHistory()
  const dataURL = `http://localhost:5000/api/articles/${id}`

  // States 
  const [article, setArticle] = useState({
    title: '',
    intro: '',
    content: '',
    author: '',
    tags: '',
  })
  const [loadingData, setLoadingData] = useState(true)
  const [error, setError] = useState(null)
  const [isPosting, setIsPosting] = useState(false)


  useEffect(() => {
    fetch(dataURL)
      .then(res => { return res.json() })
      .then(post => {
        setArticle({
          title: post.title,
          intro: post.intro,
          content: post.content,
          author: post.author,
          tags: post.tags,
        })
        setLoadingData(false)
      })
      .catch(err => {
        setLoadingData(false)
        setError(err.message)
      })
  }, [dataURL])


  const handleUpdate = (e) => {
    e.preventDefault()
    setIsPosting(true)

    fetch(dataURL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article)
    }).then(() => {
      setIsPosting(false)
      history.push('/')
    })
      .catch(err => {
        setIsPosting(false)
        setError(err)
        console.log(err)
      })
  }
  return (
    <>
      <h2 className="form-title">Update the Article</h2>
      {loadingData && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {(!loadingData && !error) &&
        <ArticleFormField
          article={article}
          setArticle={setArticle}
          handleSubmit={handleUpdate}
          isPosting={isPosting}
        />
      }
    </>
  )
}

export default UpdateArticle