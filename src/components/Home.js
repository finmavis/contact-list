import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ContactItem from './ContactItem';
import { getAllContact, handleDeleteToAPI } from '../helpers/api';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Loading = styled.p`
  text-align: center;
`;

const NewContactButton = styled(Link)`
  font-family: inherit;
  font-size: 1.5rem;
  text-align: center;
  border: 1px solid #28a745;
  padding: 0.75rem 1.5rem;
  color: #fff;
  cursor: pointer;
  outline: 0;
  transition: all 0.2s;
  background-color: #28a745;
  display: block;
  text-decoration: none;
  width: 12rem;
  text-align: center;
  margin-bottom: 1.5rem;

  &:hover,
  &:focus,
  &:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }
`;

class Home extends Component {
  state = {
    loading: false,
    contact: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const contact = await getAllContact();
    this.setState({ contact, loading: false });
  }

  handleDelete = async id => {
    try {
      const res = await handleDeleteToAPI(id);
      const newContact = this.state.contact.filter(
        contact => contact.id !== res.id,
      );
      this.setState({ contact: newContact });
    } catch (e) {
      alert('Internal Server Error/API Error');
    }
  };

  render() {
    const { contact, loading } = this.state;
    return (
      <Fragment>
        <NewContactButton to='/new'>Add Contact</NewContactButton>
        {loading ? (
          <Loading>Loading...</Loading>
        ) : (
          <Content>
            {contact.length ? (
              contact.map(c => (
                <ContactItem
                  key={c.id}
                  id={c.id}
                  fullname={`${c.firstName} ${c.lastName}`}
                  age={c.age}
                  image={c.image}
                  handleDelete={id => this.handleDelete(id)}
                />
              ))
            ) : (
              <p>No data yet</p>
            )}
          </Content>
        )}
      </Fragment>
    );
  }
}

export default Home;
