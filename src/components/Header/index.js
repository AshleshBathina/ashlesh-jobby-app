import './index.css'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoMdHome} from 'react-icons/io'
import {FaSuitcase} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <ul className="nav-content-container">
        <li className="nav-option-one">
          <Link className="nav-option" to="/">
            <img
              className="nav-logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            />
          </Link>
        </li>
        <li className="nav-options">
          <div className="nav-option-text">
            <Link className="nav-option" to="/">
              Home
            </Link>
          </div>

          <div className="nav-option-text">
            <Link className="nav-option" to="/jobs">
              Jobs
            </Link>
          </div>
        </li>
        <li className="button-container">
          <button className="logout-button" onClick={onClickLogout}>
            Logout
          </button>
        </li>
        <li className="mobile-nav-items-container">
          <div className="nav-mobile-option">
            <Link className="nav-option" to="/">
              <button className="icon-button">
                <IoMdHome className="nav-icon" />
              </button>
            </Link>
          </div>
          <div className="nav-mobile-option">
            <Link className="nav-option" to="/jobs">
              <button className="icon-button">
                <FaSuitcase className="nav-icon" />
              </button>
            </Link>
          </div>
          <div className="nav-mobile-option">
            <button className="icon-button" onClick={onClickLogout}>
              <FiLogOut className="nav-icon" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
