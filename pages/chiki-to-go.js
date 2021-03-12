import Meta from '../components/Meta';
import Link from 'next/link';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/';

import chikitogoStyles from '../styles/ChikitogoPage/Chikitogo.module.css';

const chikitogo = () => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 3,
    mode: 'free-snap',
    spacing: 15,
    loop: true,
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <Meta title="Chiki To Go | Chikitown Playground" />
      <h1>
        Coming Soon. In the meantime to learn more visit our Instagram page
      </h1>
      <button
        style={{
          width: '200px',
          height: '80px',
          border: '1px solid white',
          borderRadius: '20px',
          backgroundColor: '#427674',
          color: 'white',
        }}
      >
        <Link href="https://www.instagram.com/CHIKITOWNTOGO">CHIKI TO GO</Link>
      </button>
    </div>
  );
};

export default chikitogo;
