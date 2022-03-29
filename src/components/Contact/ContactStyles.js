import styled from 'styled-components';

import { Form, Button } from 'react-bootstrap';

export const Section = styled.section`
  color: var(--white);
`;

export const Info = styled.div`
  width: 100%;

  svg {
    font-size: 20px;
    color: var(--blue);
    float: left;
    width: 44px;
    height: 44px;
    padding: 12px;
    background: var(--bg-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
  }

  h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--white);
  }

  p {
    padding: 0 0 0 60px;
    margin-bottom: 0;
    font-size: var(--fz-sm);
    color: var(--darker-white);
  }
`;

export const Item = styled.div`
  margin-top: 40px;

  a {
    &:hover p {
      color: var(--blue);
    }
  }

  &:first-child {
    margin-top: 0;
  }

  &:hover svg {
    color: var(--white);
    background-color: var(--blue);
  }
`;

export const CustomForm = styled(Form)`
  width: 100%;

  input,
  textarea {
    color: var(--white);
    background: var(--opacity-dark);
    border: 1px solid var(--light-dark);

    &:focus {
      color: var(--white);
      background: var(--opacity-dark);
    }
  }

  .errorMessage {
    font-size: var(--fz-sm);
    color: #dc3545;
  }
`;

export const CustomButton = styled(Button)`
  background: var(--blue);
  border: 0;
  padding: 10px 35px;
  color: var(--white);
  transition: 0.4s;
  border-radius: 50px;

  &:hover {
    background: var(--darker-blue);
  }
`;
