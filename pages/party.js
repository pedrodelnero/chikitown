import { useEffect, useRef, useState } from 'react';
import Meta from '../components/Meta';
// import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { AddOns, Packages } from '../components/PartyPackages';
import partyStyles from '../styles/PartyPage/Party.module.css';

const party = () => {
  const [numSlides, setNumSlides] = useState(1);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    centered: true,
    rtl: true,
    slidesPerView: numSlides,
    spacing: 10,
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    if (window.innerWidth > 1000 && window.innerWidth < 1100) {
      setNumSlides(2);
    } else if (window.innerWidth < 1000) {
      setNumSlides(1);
    } else {
      setNumSlides(4);
    }
  }, []);

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <div>
      <Meta title="Party | Chiki Town" />
      <div ref={sliderRef} className="keen-slider" style={{ height: '500px' }}>
        <div className="keen-slider__slide">
          <img
            src="/party/carousel1.jpg"
            alt="photo 1"
            style={{ height: '100%', width: '100%' }}
          />
          {/* <Image src="/party/carousel1.jpg" alt="photo 1" layout="fill" /> */}
        </div>
        <div className="keen-slider__slide">
          <img
            src="/party/carousel2.jpg"
            alt="photo 2"
            style={{ height: '100%', width: '100%' }}
          />
          {/* <Image src="/party/carousel2.jpg" alt="photo 2" layout="fill" /> */}
        </div>
        <div className="keen-slider__slide">
          <img
            src="/party/carousel3.jpg"
            alt="photo 3"
            style={{ height: '100%', width: '100%' }}
          />
          {/* <Image src="/party/carousel3.jpg" alt="photo 3" layout="fill" /> */}
        </div>
        <div className="keen-slider__slide">
          <img
            src="/party/carousel4.jpg"
            alt="photo 4"
            style={{ height: '100%', width: '100%' }}
          />
          {/* <Image src="/party/carousel4.jpg" alt="photo 4" layout="fill" /> */}
        </div>
        <div className="keen-slider__slide">
          <img
            src="/party/carousel5.jpg"
            alt="photo 5"
            style={{ height: '100%', width: '100%' }}
          />
          {/* <Image src="/party/carousel5.jpg" alt="photo 5" layout="fill" /> */}
        </div>
      </div>
      <div className={partyStyles.events}>
        <Packages />
        <AddOns />
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
