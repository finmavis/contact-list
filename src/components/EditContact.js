import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Form from './Form';

import { getSingleContact, putToAPI } from '../helpers/api';

class EditContact extends Component {
  state = {
    loading: false,
    id: '',
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

  async componentDidMount() {
    this.setState({ loading: true });
    const { id } = this.props.match.params;
    const res = await getSingleContact(id);
    this.setState({
      id: res.id,
      firstName: { ...this.state.firstName, value: res.firstName },
      lastName: { ...this.state.lastName, value: res.lastName },
      age: { ...this.state.age, value: res.age },
      photo: { ...this.state.photo, value: res.photo },
      loading: false,
    });
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: { value, touched: true } });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { id } = this.state;
    const data = {
      firstName: this.state.firstName.value,
      lastName: this.state.lastName.value,
      age: this.state.age.value,
      photo: this.state.photo.value,
    };
    await putToAPI(id, data);
    this.props.history.push('/');
  };

  render() {
    const { firstName, lastName, age, photo, loading } = this.state;
    return (
      <>
        {loading ? (
          <p>loading...</p>
        ) : (
          <Form
            title='Edit Contact'
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
            firstName={firstName}
            lastName={lastName}
            age={age}
            photo={photo}
          />
        )}
      </>
    );
  }
}

export default withRouter(EditContact);
