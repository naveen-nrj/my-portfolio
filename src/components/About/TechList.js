import { FaReact, FaBootstrap, FaNodeJs, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiFirebase } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

import { Row, Col } from 'react-bootstrap';

import { Tech } from './AboutStyles';

const TechList = () => {
  return (
    <Row>
      <Col>
        <ul>
          <Tech color='rgb(97, 218, 251)'>
            <FaReact /> <span>React</span>
          </Tech>
          <Tech color='rgb(252, 220, 0)'>
            <DiJavascript1 /> <span>JavaScript (ES6+)</span>
          </Tech>
          <Tech color='rgb(49, 120, 198)'>
            <SiTypescript /> <span>TypeScript</span>
          </Tech>
          <Tech color='rgb(49, 120, 198)'>
            <SiFirebase color='rgb(255, 221, 0)' /> <span>Firebase</span>
          </Tech>
        </ul>
      </Col>
      <Col>
        <ul>
          <Tech color='rgb(49, 120, 198)'>
            <FaHtml5 /> <span>HTML</span>
          </Tech>
          <Tech color='rgb(121, 82, 179)'>
            <FaBootstrap /> <span>Bootstrap</span>
          </Tech>
        </ul>
      </Col>
    </Row>
  );
};

export default TechList;
