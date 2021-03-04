import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import Button from '../Button/Button';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    const { name, username, password } = ev.target;
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        name.value = '';
        username.value = '';
        password.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="registration__form">
        <div role="alert">{error && <p>{error}</p>}</div>
        <div className="input__label">
          <Label htmlFor="registration-name-input" className="form__label">
            Enter your name
            <Required />
          </Label>
          <Input
            ref={this.firstInput}
            id="registration-name-input"
            name="name"
            className="registration__input"
            placeholder="Name"
            required
          />
        </div>
        <div className="input__label">
          <Label htmlFor="registration-username-input" className="form__label">
            Choose a username
            <Required />
          </Label>

          <Input
            id="registration-username-input"
            name="username"
            required
            className="registration__input"
            placeholder="Username"
          />
        </div>
        <div className="input__label">
          <Label htmlFor="registration-password-input" className="form__label">
            Choose a password
            <Required />
          </Label>
          <Input
            id="registration-password-input"
            name="password"
            type="password"
            className="registration__input"
            placeholder="Password"
            required
          />
        </div>
        <footer className="form__footer">
          <Button type="submit" className="form__submit">
            Sign up
          </Button>{' '}
          <Link to="/login" className="returning__user">
            Already have an account?
          </Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
