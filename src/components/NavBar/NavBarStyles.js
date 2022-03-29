import styled from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';

export const CustomNavbar = styled(Navbar)`
  transition: all 0.5s;
  z-index: 10;
  padding: 5px 0;

  svg {
    height: 28px;
    width: 28px;
  }

  .navbar-toggler {
    border: none;
    padding: 0;

    &:focus {
      box-shadow: none;
    }
  }
  .resume-button {
    padding: 8px 12px !important;
    border-radius: 4px;
    border: none;
    color: var(--white) !important;
    background-color: var(--blue);
    margin-left: 30px;

    &:hover {
      background-color: var(--darker-blue);
    }

    &:hover:before {
      visibility: hidden;
    }
  }
`;

export const CustomLink = styled(Nav.Link)`
  margin: 10px 15px;
  font-weight: 500;
  position: relative;
  padding: 0 !important;

  &:before {
    content: '';
    position: absolute;
    height: 3px;
    bottom: -6px;
    left: 0;
    width: 0;
    background-color: var(--blue);
    visibility: hidden;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    width: 80%;
  }
`;
