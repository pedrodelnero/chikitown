import Meta from '../components/Meta';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { BasicEvents } from '../components/PartyPage';
import partyStyles from '../styles/PartyPage/Party.module.css';

const party = () => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 2,
    mode: 'free-snap',
    spacing: 2,
    centered: true,
    loop: true,
  });

  return (
    <div>
      <Meta title="Party | Chiki Town" />
      <div
        ref={sliderRef}
        className="keen-slider"
        // style={{ width: '100%', height: '640px', border: '1px solid red' }}
      >
        <div className="keen-slider__slide">
          <Image
            src="/party/carousel1.jpg"
            alt="photo 1"
            width="480px"
            height="640px"
            layout="intrinsic"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/party/carousel2.jpg"
            alt="photo 2"
            width="480px"
            height="640px"
            layout="intrinsic"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/party/carousel3.jpg"
            alt="photo 3"
            width="480px"
            height="640px"
            layout="intrinsic"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/party/carousel4.jpg"
            alt="photo 4"
            width="480px"
            height="640px"
            layout="intrinsic"
          />
        </div>

        {/* <div className="keen-slider__slide number-slide1">1</div> */}
      </div>
      {/* <Image
        src="/party_header.png"
        layout="responsive"
        width={100}
        height={50}
      /> */}
      <div className={partyStyles.events}>
        <h1>SMALL GROUP EVENT PACKAGES</h1>
        <BasicEvents />
      </div>
      <div className={partyStyles.terms}>
        <h2>Terms & Conditions</h2>
        <p>- Applies to ALL Packages-</p>
        <ul>
          <li>Bookings are on a first come first served basis.</li>
          <li>Taxes not included.</li>
          <li>50% non-refundable deposit required for reservation.</li>
          <li>18% service fee automatically added to all parties</li>
        </ul>
      </div>
    </div>
  );
};

export default party;
