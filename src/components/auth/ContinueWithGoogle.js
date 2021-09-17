import GoogleLogin from 'react-google-login'

const ContinueWithGoogle = () => {

  // google-login
  const responseGoogle = res => {
    if (res.error) {
      alert(`Error: ${res.error}, \n Please try again!`)
    }
    if (!res.error) {
      const idToken = res.tokenId
      fetch(`${process.env.REACT_APP_SERVER_URL}/auth/google`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
      }).then(res => {
        return res.json()
      }).then(data => {

        // todo : store token
        console.log(data)
      })
    }
  }

  // render
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default ContinueWithGoogle;