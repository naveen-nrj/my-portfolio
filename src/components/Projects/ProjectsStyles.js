import styled from 'styled-components';

export const ProjectsList = styled.section`
  color: var(--white);

  .more-btn {
    padding: 16px 24px;
    border-radius: 4px;
    border: 1px solid var(--blue);
    color: var(--blue) !important;
    background: transparent;
    margin: 0 auto;

    &:hover {
      background-color: var(--blue-opacity);
    }
  }
`;

export const ProjectBox = styled.div`
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    background: var(--opacity-darker);
    position: absolute;
    left: 30px;
    right: 30px;
    top: 30px;
    bottom: 30px;
    transition: all ease-in-out 0.3s;
    z-index: 2;
    opacity: 0;
  }

  &:hover {
    .content {
      opacity: 1;
      top: calc(45% - 48px);
    }

    .links {
      opacity: 1;
      bottom: 8%;
    }
  }

  &:hover:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }
`;

export const Content = styled.div`
  opacity: 0;
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;

  h4 {
    font-size: 20px;
    color: var(--white);
    font-weight: 600;
  }

  p {
    color: var(--darker-white);
    font-size: 14px;
    margin-bottom: 10px;
  }

  li {
    font-size: var(--fz-sm);
    margin-left: 8px;
    padding: 1.5px 5px;
    border-radius: 4px;
    border: 1px solid var(--blue);
    color: var(--darker-white);

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Links = styled.div`
  opacity: 0;
  left: 0;
  right: 0;
  bottom: 10%;
  text-align: center;
  z-index: 3;
  position: absolute;
  transition: all ease-in-out 0.3s;
`;

export const Link = styled.a`
  color: var(--white);
  margin: 0 15px;
  font-size: 22px;
  display: inline-block;
  transition: 0.3s;

  &:hover svg {
    color: ${(props) => props.color};
  }
`;
