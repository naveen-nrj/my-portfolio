import { Container } from 'react-bootstrap';
import { Section, SocialLinks, Link } from './FooterStyles';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <Section className='text-center'>
      <Container className='p-4 pb-0'>
        <SocialLinks className='mb-4'>
          <Link href='https://github.com/naveen-nrj'
            color='grey'
            target='_blank'
            rel='noreferrer'>
            <FaGithub />
          </Link>
          <Link
            href='https://www.linkedin.com/in/naveen-nrj/'
            color='rgb(10, 102, 194)'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn />
          </Link>
        </SocialLinks>
      </Container>
      <div className='pb-3'>2022 Naveen Raj</div>
    </Section>
  );
};

export default Footer;
