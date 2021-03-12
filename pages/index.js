import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <Image src="/home/play.jpg" layout="fixed" width={300} height={300} />
          <h3>PRIVATE PLAY</h3>
          <p className={styles.listItem_firstP}>
            It is a fully private resevation for your family and friends
          </p>
          <Link href="/play">Learn More</Link>
        </div>
        <div className={styles.listItem}>
          <Image
            src="/home/party.jpg"
            layout="fixed"
            width={300}
            height={300}
          />
          <h3>PARTY</h3>
          <p className={styles.listItem_firstP}>
            Celebrate and make some memories that will last a lifetime.
          </p>
          <Link href="/party">Learn More</Link>
        </div>
        <div className={styles.listItem}>
          <Image
            src="/home/chikitogo.jpg"
            layout="fixed"
            width={300}
            height={300}
          />
          <h3>CHIKI TO GO</h3>
          <p className={styles.listItem_firstP}>
            Fun, safe and engaging mobile playgrounds perfect to keep the LOs
            entertained in any kid friendly event.
          </p>
          <Link href="/chiki-to-go">Learn More</Link>
        </div>
        <div className={styles.listItem}>
          <Image
            src="/home/chikiclub.jpg"
            layout="fixed"
            width={300}
            height={300}
          />
          <h3>CHIKI CLUB</h3>
          <p className={styles.listItem_firstP}>
            Create by two women - 1 mom and 1 Montessori certified teacher -
            with a heart for uplifting and inspiring LOs to chase their dreams.
          </p>
          <Link href="/chiki-club">Learn More</Link>
        </div>
      </div>
    </div>
  );
}
