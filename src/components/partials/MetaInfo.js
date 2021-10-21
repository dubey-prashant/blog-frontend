import Helmet from 'react-helmet'

const MetaInfo = ({ title, keywords, description }) => {
  title += " - dubeytech"
  keywords += "dubeytech, tech blogs, dubeytech blog"
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default MetaInfo