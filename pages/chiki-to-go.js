import Meta from '../components/Meta';
// import Image from 'next/image';

import styles from '../styles/ChikitogoPage/Chikitogo.module.css';

const chikitogo = () => {
  return (
    <div className={styles.container}>
      <Meta title="Chiki To Go | Chikitown Playground" />
      <h1 style={{ color: 'white', fontSize: '3rem' }}>PACKAGES</h1>
      <div className={styles.package}>
        <div className={styles.packageMainImage}>
          <img
            src="/chikitogo/playland/main.jpg"
            alt="Playland photo"
            width="100%"
          />
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subPackage}>
            <div className={styles.subPackageImage}>
              <img
                src="/chikitogo/playland/micro.jpg"
                alt="Micro photo"
                style={{ height: '100%', width: '100%' }}
              />
            </div>
            <div className={styles.subPackageBody}>
              <h3 className={styles.subPackageTitle}>MICRO</h3>
              <ul>
                <li>130 SQF Soft Flooring</li>
                <li>Octagonal Ball Pit w/ Stairs</li>
                <li>3-pcs Soft Play (Tunnel)</li>
                <li>1 Hopper + 1 Rocker</li>
              </ul>
              <h3 className={styles.subPackagePrice}>$450</h3>
            </div>
          </div>
          <div className={styles.subPackage}>
            <div className={styles.subPackageImage}>
              <img
                src="/chikitogo/playland/plus.jpg"
                alt="Plus photo"
                style={{ height: '100%', width: '100%' }}
              />
            </div>
            <div className={styles.subPackageBody_Plus}>
              <h3 className={styles.subPackageTitle}>PLUS</h3>
              <ul>
                <li>175 SQF Soft Flooring</li>
                <li>Octagonal Ball Pit w/ Stairs</li>
                <li>
                  5-pcs Soft Play <br />
                  (Tunnel & House)
                </li>
                <li>3-pcs Soft Play Blocks</li>
                <li>2 Hoppers + 1 Rocker</li>
                <li>Fence</li>
                <li>1 Shoe Bin</li>
              </ul>
              <h3 className={styles.subPackagePrice}>$575</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.package}>
        <div className={styles.packageMainImage}>
          <img
            src="/chikitogo/clubhouse/main.jpg"
            alt="Clubhouse photo"
            width="100%"
          />
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subPackage}>
            <div className={styles.subPackageImage}>
              <img
                src="/chikitogo/clubhouse/micro.jpg"
                alt="Micro photo"
                style={{ height: '100%', width: '100%' }}
              />
            </div>
            <div className={styles.subPackageBody_Plus}>
              <h3 className={styles.subPackageTitle}>MICRO</h3>
              <ul>
                <li>165 SQF Soft Flooring</li>
                <li>X-Large Ball Pit (Stairs & Slide)</li>
                <li>3-pcs Soft Play</li>
                <li>1 Hopper + 1 Rocker</li>
                <li>6-pcs Soft Blocks</li>
              </ul>
              <h3 className={styles.subPackagePrice}>$495</h3>
            </div>
          </div>
          <div className={styles.subPackage}>
            <div className={styles.subPackageImage}>
              <img
                src="/chikitogo/clubhouse/plus.jpg"
                alt="Plus photo"
                style={{ height: '100%', width: '100%' }}
              />
              {/* <Image
                src="/chikitogo/clubhouse/plus.jpg"
                layout="fill"
                alt="Plus photo"
                // width={300}
                // height={300}
              /> */}
            </div>
            <div className={styles.subPackageBody_Plus}>
              <h3 className={styles.subPackageTitle}>PLUS</h3>
              <ul>
                <li>200 SQF Soft Flooring</li>
                <li>
                  X-Large Ball Pit <br />
                  (Stairs & Slide)
                </li>
                <li>6-pcs Soft Play Set</li>
                <li>6-pcs Soft Play Blocks</li>
                <li>2 Hoppers + 1 Rocker</li>
                <li>Fence</li>
                <li>1 Shoe Bin</li>
              </ul>
              <h3 className={styles.subPackagePrice}>$650</h3>
            </div>
          </div>
          <div className={styles.subPackage}>
            <div className={styles.subPackageImage}>
              <img
                src="/chikitogo/clubhouse/deluxe.jpg"
                alt="Plus photo"
                style={{ height: '100%', width: '100%' }}
              />
              {/* <Image
                src="/chikitogo/clubhouse/deluxe.jpg"
                layout="fill"
                alt="Plus photo"
                // width={300}
                // height={300}
              /> */}
            </div>
            <div className={styles.subPackageBody_Plus}>
              <h3 className={styles.subPackageTitle}>DELUXE</h3>
              <ul>
                <li>300 SQF Soft Flooring</li>
                <li>
                  X-Large Ball Pit <br />
                  (Stairs & Slide)
                </li>
                <li>
                  8-pcs Soft Play <br />
                  (Pyramid | Tunnel | House)
                </li>
                <li>6-pcs Soft Play Blocks</li>
                <li>3 Hoppers + 2 Rockers</li>
                <li>Fence</li>
                <li>1 Shoe Bin</li>
              </ul>
              <h3 className={styles.subPackagePrice}>$795</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.package}>
        <div className={styles.packageMainImage}>
          <img
            src="/chikitogo/wonderland/main.jpg"
            alt="Wonderland photo"
            width="100%"
          />
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subPackage}>
            <div className={styles.subPackageImage}>
              <img
                src="/chikitogo/wonderland/micro.jpg"
                alt="Micro photo"
                style={{ height: '100%', width: '100%' }}
              />
              {/* <Image
                src="/chikitogo/wonderland/micro.jpg"
                layout="fill"
                alt="Micro photo"
                // width={300}
                // height={300}
              /> */}
            </div>
            <div className={styles.subPackageBody}>
              <h3 className={styles.subPackageTitle}>MICRO</h3>
              <ul>
                <li>130 SQF Soft Flooring</li>
                <li>Octagonal Ball Pit w/ Stairs (White Balls)</li>
                <li>3-pcs Soft Play House</li>
                <li>2 Unicorn Hoppers</li>
              </ul>
              <h3 className={styles.subPackagePrice}>$475</h3>
            </div>
          </div>
          <div className={styles.subPackage}>
            <div className={styles.subPackageImage}>
              <img
                src="/chikitogo/wonderland/plus.jpg"
                alt="Plus photo"
                style={{ height: '100%', width: '100%' }}
              />
              {/* <Image
                src="/chikitogo/wonderland/plus.jpg"
                layout="fill"
                alt="Plus photo"
                // width={300}
                // height={300}
              /> */}
            </div>
            <div className={styles.subPackageBody_Plus}>
              <h3 className={styles.subPackageTitle}>PLUS</h3>
              <ul>
                <li>175 SQF Soft Flooring</li>
                <li>Octagonal Ball Pit w/ Stairs (White Balls)</li>
                <li>4-pcs Soft Play House + Rainbow</li>
                <li>6-pcs Soft Play Blocks</li>
                <li>2 Unicorn Hoppers + 1 Unicorn Rocker</li>
                <li>Pink Fence</li>
                <li>1 Shoe Bin</li>
              </ul>
              <h3 className={styles.subPackagePrice}>$625</h3>
            </div>
          </div>
          <div className={styles.subPackage}>
            <div className={styles.subPackageImage}>
              <img
                src="/chikitogo/wonderland/deluxe.jpg"
                alt="Deluxe photo"
                style={{ height: '100%', width: '100%' }}
              />
              {/* <Image
                src="/chikitogo/wonderland/deluxe.jpg"
                layout="fill"
                alt="Deluxe photo"
                // width={300}
                // height={300}
              /> */}
            </div>
            <div className={styles.subPackageBody_Plus}>
              <h3 className={styles.subPackageTitle}>DELUXE</h3>
              <ul>
                <li>275 SQF Soft Flooring</li>
                <li>Octagonal Ball Pit w/ Stairs (White Balls)</li>
                <li>8-pcs Soft Play House | Tunnel | Rainbow</li>
                <li>6-pcs Soft Play Blocks</li>
                <li>3 Hoppers + 2 Rockers</li>
                <li>Pink Fence</li>
                <li>1 Shoe Bin</li>
              </ul>
              <h3 className={styles.subPackagePrice}>$750</h3>
            </div>
          </div>
        </div>
      </div>
      <ul style={{ color: '#8F867F', marginTop: '20px' }}>
        <li>
          <strong>Prices are for up to 4 hours rentals</strong>
        </li>
        <li>
          <strong>Prices include delivery to Miami area</strong>
        </li>
        <li>
          <strong>Prices are subject to change without notice.</strong>
        </li>
        <li>
          <strong>Staff not included</strong>
        </li>
        <li>
          <strong>Available upon request</strong>
        </li>
      </ul>
    </div>
  );
};

export default chikitogo;
