import styled from 'styled-components';

export const Section = styled.section`
  color: var(--white);
  padding-top: 30px;
`;


export const SocialLinks = styled.div`
  margin-top: 30px;
`;

export const Link = styled.a`
  font-size: 20px;
  display: inline-block;
  color: var(--light-dark);
  line-height: 1;
  margin-right: 20px;
  transition: 0.3s;
  &:hover svg {
    color: ${(props) => props.color};
  }
`;