import { useState } from "react"
// import { useHistory } from "react-router"
import marked from 'marked'
import DOMPurify from 'dompurify'
import ArticleFormField from "./articleFormField"

const CreateArticle = () => {
  // const history = useHistory()

  // States 
  const [article, setArticle] = useState({
    title: '',
    intro: '',
    content: '',
    author: '',
    tags: '',
  })
  const [isPosting, setIsPosting] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsPosting(true)

    fetch('http://localhost:5000/api/articles', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article)
    }).then(res => {
      setIsPosting(false)
      console.log(res)
      return res.json()
    }).then(data => {
      console.log(data)
    })
      .catch(err => console.log(err))
  }
  return (
    <>
      <h2 className="form-title">Compose a new Article</h2>
      <ArticleFormField
        article={article}
        setArticle={setArticle}
        handleSubmit={handleSubmit}
        isPosting={isPosting}
      />

      {!showPreview && <span onClick={preview} className='btn'>Show Preview</span>}
      {showPreview && <span onClick={preview} className='btn'>Hide Preview</span>}

      {showPreview &&
        <div className="preview">
          <h1 style={{ margin: 0 }} >{article.title}</h1>
          <p style={{ margin: 0 }} > <sup>- {article.author}</sup> </p>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(article.content)) }} ></div>
          <div dangerouslySetInnerHTML={{ __html: marked(article.content) }} ></div>
        </div>
      }
    </>
  )
  function preview() {
    setShowPreview(!showPreview)
  }
}

export default CreateArticle