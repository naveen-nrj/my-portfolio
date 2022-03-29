import { Section, Title, Item } from './TimelineStyles';
import { Row, Col } from 'react-bootstrap';

import { educations, experiences } from '../../content/content';

import { BiChevronRight } from 'react-icons/bi';

const Education = () => {
  return (
    <Section id='timeline' data-aos='fade-up'>
      <div className='section-title'>
        <h2>Timeline</h2>
        <div className='section-line'></div>
      </div>
      <Row>
        <Col lg={6} data-aos='zoom-in'>
          <Title>Education</Title>
          {educations.map((education) => (
            <Item>
              <h4>{education.program}</h4>
              <h5>{education.time}</h5>
              <p>{education.school}</p>
              <p>{education.coursework}</p>
            </Item>
          ))}
        </Col>
        <Col lg={6} data-aos='zoom-in'>
          <Title>Experience</Title>
          {experiences.map((job) => (
            <Item>
              <h4>{job.position}</h4>
              <h5>{job.time}</h5>
              <p>{job.company}</p>
              <ul>
                {job.description.map((bullet) => (
                  <li>
                    <BiChevronRight />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Item>
          ))}
        </Col>
      </Row>
    </Section>
  );
};

export default Education;
