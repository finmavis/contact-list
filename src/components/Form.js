import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Input from './styles/Input';
import Action from './styles/Action';
import Heading from './styles/Heading';

const TextError = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  color: #dc3545;
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 1rem;
`;

const Form = ({
  handleSubmit,
  handleInput,
  firstName,
  lastName,
  age,
  photo,
  title,
}) => (
  <form onSubmit={handleSubmit}>
    <Heading>{title}</Heading>
    <Input
      name='firstName'
      type='text'
      placeholder='Firstname'
      autoFocus
      required
      value={firstName.value}
      onChange={handleInput}
    />
    {firstName.touched && firstName.value.length < 3 ? (
      <TextError>
        Firstname characters must be larger than or equal to 3
      </TextError>
    ) : null}
    <Input
      name='lastName'
      type='text'
      placeholder='Lastname'
      required
      value={lastName.value}
      onChange={handleInput}
    />
    {lastName.touched && lastName.value.length < 3 ? (
      <TextError>
        Lastname characters must be larger than or equal to 3
      </TextError>
    ) : null}
    <Input
      name='age'
      type='number'
      placeholder='Age'
      required
      value={age.value}
      onChange={handleInput}
      min='1'
      max='100'
    />
    <Input
      name='photo'
      type='text'
      placeholder='Image Link'
      value={photo.value}
      onChange={handleInput}
    />
    <Action>
      <Link to='/' className='back'>
        Back
      </Link>
      <button className='save' type='submit'>
        Save
      </button>
    </Action>
  </form>
);

export default Form;
