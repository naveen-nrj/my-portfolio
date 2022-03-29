import { useState } from 'react';

import { CustomForm, CustomButton } from './ContactStyles';
import { toastifySuccess } from './ToastMessage';
import { emailJSParams } from "../../content/content"
import { Row, Col, Form, Spinner } from 'react-bootstrap';

import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isSending, setIsSending] = useState(false);

  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsSending(true);
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      if (window.location.hostname === "localhost") {
        await emailjs.send(
          emailJSParams.service_ID,
          emailJSParams.template_ID,
          templateParams,
          emailJSParams.user_ID
        );
      } else {
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        );
      }


      reset();
      setIsSending(false);
      toastifySuccess();
    } catch (e) {
      setIsSending(false);
      console.log(e);
    }
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='email'
              placeholder='Your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          as='textarea'
          rows={3}
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Form.Group>
      <div className='text-center'>
        <CustomButton variant='primary' type='submit' disabled={isSending}>
          {isSending ? (
            <>
              <Spinner
                as='span'
                animation='border'
                size='sm'
                role='status'
                aria-hidden='true'
              />
              <span className='visually-hidden'>Loading...</span>
            </>
          ) : (
            'Send Message'
          )}
        </CustomButton>
      </div>
    </CustomForm>
  );
};

export default ContactForm;
