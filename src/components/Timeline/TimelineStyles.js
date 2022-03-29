import styled from 'styled-components';

export const Section = styled.section`
  color: var(--white);
`;

export const Item = styled.div`
  padding: 0 0 20px 20px;
  margin-top: -2px;
  margin-left: 8px;
  border-left: 2px solid var(--blue);
  position: relative;

  h4 {
    line-height: 18px;
    font-size: var(--fz-lg);
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    color: var(--blue);
    margin-bottom: 10px;
  }

  h5 {
    font-size: var(--fz-md);
    background: var(--bg-dark);
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
  }

  ul {
    padding-left: 0;
  }

  li {
    padding-bottom: 10px;

    svg {
      margin-right: 6px;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: var(--bg-dark);
    border: 2px solid #0563bb;
  }
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;
