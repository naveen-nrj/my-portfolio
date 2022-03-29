import { BiHome, BiCodeAlt, BiMessageDetail } from 'react-icons/bi';
import { RiTimeLine } from 'react-icons/ri';
import { MdPersonOutline } from 'react-icons/md';

import ScrollspyNav from 'react-scrollspy-nav';
import ScrollToTop from 'react-scroll-to-top';

import { CustomContainer, CustomNav } from './SideNavStyles';

const SideNav = () => {
  return (
    <CustomContainer className='d-flex flex-column justify-content-center'>
      <CustomNav>
        <ScrollspyNav
          scrollTargetIds={['home', 'about', 'timeline', 'projects', 'contact']}
          activeNavClass='activeNav'
          scrollDuration='50'
        >
          <ul>
            <li>
              <a href='#home'>
                <BiHome />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href='#about'>
                <MdPersonOutline />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href='#timeline'>
                <RiTimeLine />
                <span>Timeline</span>
              </a>
            </li>
            <li>
              <a href='#projects'>
                <BiCodeAlt />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href='#contact'>
                <BiMessageDetail />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </ScrollspyNav>
      </CustomNav>
      <ScrollToTop smooth color='var(--white)' height='20' />
    </CustomContainer>
  );
};

export default SideNav;
