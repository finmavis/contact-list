import styled from 'styled-components';

const Action = styled.div`
  display: flex;

  & > * {
    font-family: inherit;
    font-size: 1.5rem;
    text-align: center;
    border: 1px solid transparent;
    padding: 0.75rem 1.5rem;
    color: #fff;
    cursor: pointer;
    outline: 0;
    transition: all 0.2s;
    display: inline-block;
    text-decoration: none;
    width: 100%;
    text-align: center;
  }

  & .back {
    background-color: #17a2b8;
    border-color: #17a2b8;
  }

  & .save {
    border-color: #28a745;
    background-color: #28a745;
  }
`;

export default Action;
