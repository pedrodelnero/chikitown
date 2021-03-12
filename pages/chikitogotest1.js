import Meta from '../components/Meta';
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
    <div>
      <Meta title="Chiki To Go | ChikiTown " />
      <div className={chikitogoStyles.header}>
        <div className={chikitogoStyles.header_part1}>
          <h1>Chiki To Go</h1>
          <h2>Quarantine Rental Playgrounds</h2>
        </div>
        <hr />
        <div className={chikitogoStyles.header_part2}>
          <h2>Let us bring the fun to you!</h2>
          <h3>FOLLOW US!</h3>
        </div>
        <div className={chikitogoStyles.header_part3}>
          <a target="_blank" href="https://www.facebook.com/chikitowntogo/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a target="_blank" href="https://www.instagram.com/CHIKITOWNTOGO/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className={chikitogoStyles.content_packages}>
        <h1>ULTIMATE PACKAGES</h1>
        <div className={chikitogoStyles.content_package}>
          <div className={chikitogoStyles.package_item}>
            <div className={chikitogoStyles.package_item_photo}>
              <Image src="/clubhouse.png" layout="fill" />
            </div>
            <div>
              <h2>CLUBHOUSE</h2>
              <ul>
                <li>- Up to 275 sqf Soft Flooring</li>
                <li>- X-Large Ball Pit w/ slide and climber steps.</li>
                <li>- Soft Play Pyramid w/ slide and chimber steps.</li>
                <li>- Soft Play Set with Tunnel (3pcs)</li>
                <li>- Soft Play Blocks (6 pcs)</li>
                <li>- 3 Animal Hoppers</li>
                <li>- 2 Animal Rockers</li>
                <li>- Fence</li>
                <li>- Shoe Bin</li>
              </ul>
              <div className={chikitogoStyles.package_item_price}>
                <h2>$695</h2>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className={chikitogoStyles.package_item}>
            <div className={chikitogoStyles.package_item_photo}>
              <Image src="/clubhouse.png" layout="fill" />
            </div>
            <div>
              <h2>PLAYLAND</h2>
              <ul>
                <li>- Up to 175 sqf Soft Flooring</li>
                <li>- Octagon Ball Pit w/ Stairs</li>
                <li>- Soft Play Set with Tunnel (4 pcs)</li>
                <li>- 2 Animal Hoppers</li>
                <li>- 1 Animal Rockers</li>
                <li>- Fence</li>
                <li>- Shoe Bin</li>
              </ul>
              <div className={chikitogoStyles.package_item_price}>
                <h2>$550</h2>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className={chikitogoStyles.package_item}>
            <div className={chikitogoStyles.package_item_photo}>
              <Image src="/clubhouse.png" layout="fill" />
            </div>
            <div>
              <h2>WONDERLAND</h2>
              <ul>
                <li>- Up to 175 sqf Soft Flooring (Pink)</li>
                <li>- Octagon Ball Pit w/ Stairs</li>
                <li>- Soft Play Set (3 pcs)</li>
                <li>- Soft Play Blocks (6 pcs)</li>
                <li>- Soft Play Rainbow Climber</li>
                <li>- 2 Animal Hoppers (Unicorns)</li>
                <li>- Fence (Pink)</li>
                <li>- Shoe Bin</li>
              </ul>
              <div className={chikitogoStyles.package_item_price}>
                <h2>$550</h2>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <h1>BASIC PACKAGES</h1>
        <div className={chikitogoStyles.content_package}>
          <div className={chikitogoStyles.package_item}>
            <div className={chikitogoStyles.package_item_photo}>
              <Image src="/clubhouse.png" layout="fill" />
            </div>
            <div>
              <h2>B - CLUBHOUSE</h2>
              <ul>
                <li>- Up to 165 sqf Soft Flooring</li>
                <li>- X-Large Ball Pit w/ slide and climber steps.</li>
                <li>- Soft Play Set with Tunnel (3 pcs)</li>
                <li>- Soft Play Blocks (6 pcs)</li>
                <li>- 1 Animal Hoppers</li>
                <li>- 1 Animal Rockers</li>
              </ul>
              <div className={chikitogoStyles.package_item_price}>
                <h2>$650</h2>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className={chikitogoStyles.package_item}>
            <div className={chikitogoStyles.package_item_photo}>
              <Image src="/clubhouse.png" layout="fill" />
            </div>
            <div>
              <h2>B - PLAYLAND</h2>
              <ul>
                <li>- Up to 130 sqf Soft Flooring</li>
                <li>- Octagon Ball Pit w/ Stairs</li>
                <li>- Soft Play Set with Tunnel (3 pcs)</li>
                <li>- 1 Animal Hoppers</li>
                <li>- 1 Animal Rockers</li>
              </ul>
              <div className={chikitogoStyles.package_item_price}>
                <h2>$395</h2>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className={chikitogoStyles.package_item}>
            <div className={chikitogoStyles.package_item_photo}>
              <Image src="/clubhouse.png" layout="fill" />
            </div>
            <div>
              <h2>B - WONDERLAND</h2>
              <ul>
                <li>- Up to 130 sqf Soft Flooring (Pink)</li>
                <li>- Octagon Ball Pit w/ Stairs</li>
                <li>- Soft Play Set (3 pcs)</li>
                <li>- Soft Play Blocks (6 pcs)</li>
                <li>- 1 Animal Hoppers (Unicorns)</li>
              </ul>
              <div className={chikitogoStyles.package_item_price}>
                <h2>$395</h2>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chikitogo;
