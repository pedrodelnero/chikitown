import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <nav className={styles.nav}>
        <ul>
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
      <div className={styles.social}>
        <h2>Follow us on:</h2>
        <p>CHIKI TOWN</p>
        <p>INDOOR PLAYGROUND</p>
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/chikitown.playground/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/CHIKITOWN.PLAYGROUND/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>CHIKI TO GO</p>
        <p>MOBILE PLAYGROUND</p>
        <div>
          <a target="_blank" href="https://www.facebook.com/chikitowntogo/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a target="_blank" href="https://www.instagram.com/CHIKITOWNTOGO/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
