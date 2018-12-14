import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './styles/Button';

const ContactItemStyle = styled.div`
  width: 20rem;
  background: #fff;
  font-family: inherit;
  color: #7f8c8d;
  text-align: center;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  margin: 1rem auto 0.5rem;
  height: 6rem;
  width: 6rem;
  border-radius: 18rem;
`;

const Fullname = styled.p`
  font-family: inherit;
  font-size: 1.6rem;
  color: #6c757d;
  font-weight: bold;
`;

const Age = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  color: #6c757d;
  margin-bottom: 2rem;
`;

const Action = styled.div`
  display: flex;
`;

const EditButton = styled(Link)`
  display: inline-block;
  border: 1px solid #17a2b8;
  padding: 1.5rem 3rem;
  line-height: 1.5;
  width: 100%;
  color: #fff;
  cursor: pointer;
  outline: 0;
  transition: all 0.2s;
  background-color: #17a2b8;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    background-color: #138496;
    border-color: #117a8b;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;
  border-color: #dc3545;

  &:hover,
  &:focus,
  &:active {
    background-color: #c82333;
    border-color: #bd2130;
  }
`;

const ContactItem = ({ id, fullname, age, image, handleDelete }) => (
  <ContactItemStyle>
    <Image
      src='http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550'
      alt='tes'
    />
    <Fullname>{fullname}</Fullname>
    <Age>Age : {age}</Age>
    <Action>
      <EditButton to={`/edit/${id}`}>Edit</EditButton>
      <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
    </Action>
  </ContactItemStyle>
);

export default ContactItem;
