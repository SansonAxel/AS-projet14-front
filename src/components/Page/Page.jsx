import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader/AppHeader';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import Sidebar from '../Sidebar/Sidebar';

import './Page.scss';

const Page = ({ children }) => {
  const [isSideBarOpened, setIsSidebarOpened] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpened(!isSideBarOpened);
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      const isWindowDesktop = window.innerWidth > 992;
      setIsDesktop(isWindowDesktop);

      if (!isWindowDesktop) {
        setIsSidebarOpened(false);
      } else {
        setIsSidebarOpened(true);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsSidebarOpened]);

  return (
    <main
      className={`Page ${isDesktop ? 'Page--Desktop' : 'Page--Mobile'} ${
        isSideBarOpened ? 'SidebarOpened' : 'SidebarClosed'
      }`}
    >
      <header className="Page__Header">
        <Sidebar
          isSidebarOpened={isSideBarOpened}
          toggleSidebar={toggleSidebar}
          isDesktop={isDesktop}
        />
        <AppHeader />
      </header>
      {children}
    </main>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
