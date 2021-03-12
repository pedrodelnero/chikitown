import Meta from '../components/Meta';
import Image from 'next/image';
import { MapContainer, Form } from '../components/ContactPage/';

import contactStyles from '../styles/ContactPage/Contact.module.css';

const contact = () => {
  return (
    <div className={contactStyles.contact_container}>
      <Meta title="Contact | ChikiTown" />
      <div className={contactStyles.map}>
        {/* <MapContainer /> */}
        <Image src="/contact/entrance.jpg" alt="entrance" layout="fill" />
      </div>
      <div className={contactStyles.form}>
        <Form />
      </div>
    </div>
  );
};

export default contact;
