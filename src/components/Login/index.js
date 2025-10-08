import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onUsername = event => {
    this.setState({username: event.target.value, errorMsg: ''})
  }

  onPassword = event => {
    this.setState({password: event.target.value, errorMsg: ''})
  }

  onClickLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const jwtToken = data.jwt_token

      Cookies.set('jwt_token', jwtToken, {expires: 2})

      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-route-container">
        <div className="content-container">
          <img
            className="login-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
          <form className="form-container" onSubmit={this.onClickLogin}>
            <div className="input-container">
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <input
                className="input"
                onChange={this.onUsername}
                value={username}
                placeholder="Username"
                id="username"
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="input"
                onChange={this.onPassword}
                value={password}
                placeholder="Password"
                id="password"
                type="password"
              />
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            {errorMsg !== '' && <p className="error-message">*{errorMsg}</p>}
            <p className="idp">ID: rahul, Password: rahul@2021</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
