import TypeAnimation from 'react-type-animation';

import { Section, SocialLinks, Link } from './HeroStyles';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  return (
    <Section id='home' className='d-flex flex-column justify-content-center'>
      <div data-aos='zoom-in' className='text-lg-start'>
        <p className='greeting'>Hi, I am</p>
        <h1>Naveen Raj</h1>
        <p>
          &lt;p&gt;
          <TypeAnimation
            cursor={true}
            sequence={[
              'I am a Frontend developer.',
              1000,
              'I love building things for the web.',
              1000,
              '',
            ]}
            wrapper='b'
            repeat={Infinity}
          />
          &lt;/p&gt;
        </p>
        <SocialLinks>
          <Link href='https://github.com/naveen-nrj' color='grey' target='_blank'
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
        <a className='btn' href='#contact'>
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default Hero;
