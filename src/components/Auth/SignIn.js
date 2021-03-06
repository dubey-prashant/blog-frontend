import { useState } from "react"
import { useHistory } from "react-router"
import ContinueWithGoogle from "./ContinueWithGoogle"


const SignIn = () => {
  const history = useHistory()
  const [error, setError] = useState()



  const handleSignIn = (e) => {
    e.preventDefault()

    const userData = {
      email: e.target.email.value,
      password: e.target.pass.value
    }

    fetch('/auth/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    }).then(res => {
      if (res.ok) {
        return res.text()
      } else {
        throw new Error(`couldn't reach there`)
      }
    }).then(data => {
      if (data === `signed in`) {
        alert(data)
        history.push('/')
      } else {
        throw new Error(data)
      }
    }).catch(err => {
      setError(err.message)
    })

  }
  return (
    <div className="Auth">
      {error && <div>{error}</div>}
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} method="post">
        <label>Email:</label>
        <input name='email' type="email" />
        <label>Password:</label>
        <input name='pass' type="password" />
        <button className="btn">Sign In</button>
        <div className="info">
          <a href="/sign-up">Don't have an account? Sign Up.</a>
        </div>

      </form>

      <ContinueWithGoogle />

    </div>
  )
}

export default SignIn;