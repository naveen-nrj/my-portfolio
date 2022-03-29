import {
  Section,
  Info,
  Item,
} from './ContactStyles';

import { Row, Col } from 'react-bootstrap';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

import ContactForm from './ContactForm';

import { contact } from '../../content/content';

import { ToastContainer } from 'react-toastify';

const Contact = () => {
  return (
    <Section id='contact' data-aos='fade-up'>
      <div className='section-title'>
        <h2>Contact</h2>
        <div className='section-line'></div>
      </div>
      <Row className='mt-1'>
        <Col lg={4}>
          <Info>
            <Item>
              <HiOutlineMail />
              <h4>Email:</h4>
              <a href={`mailto:${contact.email}`}>
                <p>{contact.email}</p>
              </a>
            </Item>

            <Item>
              <HiOutlinePhone />
              <h4>Phone:</h4>
              <a href={`tel:${contact.phone}`}>
                <p>{contact.phone}</p>
              </a>
            </Item>
          </Info>
        </Col>
        <Col lg={8} className='mt-5 mt-lg-0'>
          <ContactForm />
        </Col>
      </Row>
      <ToastContainer />
    </Section>
  );
};

export default Contact;
