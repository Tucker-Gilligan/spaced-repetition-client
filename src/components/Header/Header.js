import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className="logged__in">
        <span className="user__logged__in">{this.context.user.name}</span>
        <nav className="logout__container">
          <Link
            className="logout__link"
            onClick={this.handleLogoutClick}
            to="/login"
          >
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="login__route">
        <p className="tagline">
          Practice learning a language with the spaced repetition revision
          technique.
        </p>
        <nav className="nav__links">
          <Link to="/login" className="login__link">
            Login
          </Link>
          <Link to="/register" className="register__link">
            Sign up
          </Link>
        </nav>
      </div>
    );
  }

  render() {
    return (
      <header className="header__container">
        <h1 className="header__title">
          <Link to="/" className="header__link">
            <span className="spaced">Spaced</span> repetition
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
