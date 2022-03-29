import styled from 'styled-components';

export const Section = styled.section`
  padding: 0;
  width: 100%;
  height: 100vh;
  position: relative;
  background: url('/images/hero.png') center right no-repeat;
  background-size: 450px 300px;

  h1 {
    margin: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: rgb(230, 230, 230);
  }

  p {
    color: rgb(230, 230, 230);
    margin: 15px 0 0 0;
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
  }

  .btn {
    padding: 10px 18px;
    border-radius: 4px;
    border: 1px solid var(--blue);
    color: var(--blue) !important;
    margin-left: 0;
    margin-top: 30px;
    font-weight: 600;
    font-size: 18px;

    &:hover {
      background-color: var(--blue-opacity);
    }

    &:hover:before {
      visibility: hidden;
    }
  }

  .greeting {
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 16px;
  }

  @media (max-width: 992px) {
    text-align: center;
    background: url('/images/mobile-hero-image.png') center right no-repeat;
    background-size: 450px 300px;

    h1 {
      font-size: 32px;
      line-height: 36px;
    }

    p {
      margin-top: 10px;
      font-size: 18px;
      line-height: 24px;
    }

    .btn {
      color: var(--white) !important;
      border: none;
      background-color: var(--blue);

      &:hover {
        background-color: rgb(7, 93, 173);
      }
    }
  }
`;

export const SocialLinks = styled.div`
  margin-top: 30px;
`;

export const Link = styled.a`
  font-size: 24px;
  display: inline-block;
  color: var(--light-dark);
  line-height: 1;
  margin-right: 20px;
  transition: 0.3s;
  &:hover svg {
    color: ${(props) => props.color};
  }
`;
