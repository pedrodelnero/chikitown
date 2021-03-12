import { useContext } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons/';

import Mobile from '../../context/Mobile';
import SideBarStyles from '../../styles/SideBar/SideBar.module.css';

const SidebarMenu = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(Mobile);

  const handleDrawerToggle = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={SideBarStyles.sidebarMenu}>
      <div>
        <div onClick={handleDrawerToggle}>
          <Link href="/">
            <h2>Home</h2>
          </Link>
        </div>
        <div onClick={handleDrawerToggle}>
          <Link href="/play">
            <h2>Play</h2>
          </Link>
        </div>
        <div onClick={handleDrawerToggle}>
          <Link href="/party">
            <h2>Party</h2>
          </Link>
        </div>
        <div onClick={handleDrawerToggle}>
          <Link href="/chiki-to-go">
            <h2>Chiki To Go</h2>
          </Link>
        </div>
        <div onClick={handleDrawerToggle}>
          <Link href="/chiki-club">
            <h2>Chiki Club</h2>
          </Link>
        </div>
        <div onClick={handleDrawerToggle}>
          <Link href="/contact">
            <h2>Contact</h2>
          </Link>
        </div>
      </div>
      <div className={SideBarStyles.social}>
        <a
          className={SideBarStyles.socialFacebook}
          target="_blank"
          href="https://www.facebook.com/chikitown.playground"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          className={SideBarStyles.socialInstagram}
          target="_blank"
          href="https://www.instagram.com/CHIKITOWN.PLAYGROUND/"
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </div>
    </div>
  );
};

export default SidebarMenu;
