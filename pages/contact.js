import Meta from '../components/Meta';
import Image from 'next/image';
import { Form } from '../components/ContactPage/';

import styles from '../styles/ContactPage/Contact.module.css';

const contact = () => {
  return (
    <div className={styles.contact_container}>
      <Meta title="Contact | ChikiTown" />
      <div className={styles.image}>
        <img src="/contact/entrance.jpg" alt="entrance" width="100%" />
      </div>
      <div className={styles.form}>
        <Form />
      </div>
    </div>
  );
};

export default contact;
