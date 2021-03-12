import Meta from '../components/Meta';
import Link from 'next/link';

import styles from '../styles/PlayPage/Play.module.css';

const play = () => {
  return (
    <div className={styles.playContainer}>
      <Meta title="Chikitown | Play" />
      <img
        src="/play/play1_med.jpg"
        alt="play photo"
        className={styles.image1}
      />
      <div className={styles.content}>
        <h4>
          Our modern indoor playground offers safe, age-appropriate
          opportunities for social activities for kids from 1 to 6 years of age.
          Parental supervision is require at all time! In our Chiki Café we
          offer snacks and drinks for purchase!
        </h4>
        <h2>PRIVATE PLAY</h2>
        <p>
          Exclusive access to the entire venue. The ultimate way for you and
          your friends to enjoy in a totally stress free and relaxed atmosphere.
        </p>
        <div className={styles.playPrices}>
          <div>
            <h4>$30 per child</h4>
            <p>(group of 2-4 children)</p>
            <p>$15 per child for additional hr.</p>
          </div>
          <div>
            <h4>$25 per child</h4>
            <p>(group of 5+ children)</p>
            <p>$10 per child for additional hr.</p>
          </div>
        </div>
        <div className={styles.playRules}>
          <p>No more than 10 people per group.</p>
          <p>Private use of entire facility for 2 hours</p>
          <p>Advance reservation required.</p>
          <p>
            All families are required to fill out the waiver prior to entering
            the play area.
          </p>
          <p>Groups are more than welcome to bring food & drinks!</p>
          <p>**ALL GUESTS MUST WEAR SOCKS**</p>
        </div>
        <div className={styles.playDisclaimer}>
          <p>
            **The private play option CANNOT be used for birthday party. If you
            are interested in a birthday during one of the private play time,
            the birthday party rate will apply.**
          </p>
        </div>
        <div className={styles.playButton}>
          <button>
            <Link href="https://squareup.com/appointments/book/3m05d00os956ut/FRKFX9GDA9FW8/services">
              BOOK NOW
            </Link>
          </button>
        </div>
      </div>
      <img
        src="/play/play2_md.jpg"
        alt="play photo"
        className={styles.image2}
      />
    </div>
  );
};

export default play;
