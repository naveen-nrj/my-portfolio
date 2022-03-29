import styled from 'styled-components';

export const CustomContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  transition: all 0.5s;
  padding: 15px;
  overflow-y: auto;

  .styles_scroll-to-top__2A70v {
    border-radius: 50%;
    background-color: var(--blue);
  }
  @media (max-width: 1090px) {
    transform: translateX(-100%);
  }
`;

export const CustomNav = styled.nav`
  padding: 0;
  display: block;
  margin: 0;

  ul {
    padding: 0;
  }

  li {
    position: relative;
    white-space: nowrap;
  }

  a {
    display: flex;
    align-items: center;
    color: var(--light-dark);
    padding: 10px 18px;
    margin-bottom: 8px;
    font-size: 15px;
    border-radius: 50px;
    background: var(--bg-dark);
    height: 56px;
    width: 100%;
    overflow: hidden;
    transition: 0.4s;

    svg {
      font-size: 20px;
    }

    span {
      padding: 0 5px 0 7px;
      color: var(--light-dark);
    }

    &:hover {
      color: white;
      background: var(--blue);
      opacity: 0.8;
      width: 100%;

      span {
        color: white;
        display: block;
      }
    }
  }

  .activeNav {
    color: white !important;
    background: var(--blue) !important;
    opacity: 0.8;
  }

  @media (min-width: 1090px) {
    a {
      width: 56px;

      span {
        display: none;
        color: var(--white);
      }
    }
  }
`;
