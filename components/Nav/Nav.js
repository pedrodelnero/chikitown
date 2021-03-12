import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Mobile from '../../context/Mobile.js';
import navStyles from '../../styles/Nav.module.css';

const Nav = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(Mobile);

  return (
    <nav className={navStyles.nav}>
      <div>
        <img src="/logo.jpg" className={navStyles.logo} />
      </div>
      <div
        className={navStyles.mobileBarMenu}
        onClick={() => {
          console.log('click');
          setIsSidebarOpen(!isSidebarOpen);
        }}
      >
        {!isSidebarOpen ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </div>
      <ul className={navStyles.regularMenu}>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/play">PLAY</Link>
        </li>
        <li>
          <Link href="/party">PARTY</Link>
        </li>
        <li>
          <Link href="/chiki-to-go">CHIKI TO GO</Link>
        </li>
        <li>
          <Link href="/chiki-club">CHIKI CLUB</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
