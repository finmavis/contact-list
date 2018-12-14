import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Form from './Form';

import { postToAPI } from '../helpers/api';

class NewContact extends Component {
  state = {
    firstName: {
      value: '',
      touched: false,
    },
    lastName: {
      value: '',
      touched: false,
    },
    age: {
      value: 1,
      touched: false,
    },
    photo: {
      value: '',
      touched: false,
    },
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: { value, touched: true } });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = {
      firstName: this.state.firstName.value,
      lastName: this.state.lastName.value,
      age: this.state.age.value,
      photo: this.state.photo.value,
    };
    await postToAPI(data);
    this.props.history.push('/');
  };

  render() {
    const { firstName, lastName, age, photo } = this.state;
    return (
      <Form
        title='New Contact'
        handleSubmit={this.handleSubmit}
        handleInput={this.handleInput}
        firstName={firstName}
        lastName={lastName}
        age={age}
        photo={photo}
      />
    );
  }
}

export default withRouter(NewContact);
