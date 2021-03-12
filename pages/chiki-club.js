import Link from 'next/link';
import Meta from '../components/Meta';

const chikiclub = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Meta title="Chiki Club | Chikitown Playground" />
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
        <Link href="https://www.instagram.com/THECHIKICLUB">CHIKI CLUB</Link>
      </button>
    </div>
  );
};

export default chikiclub;
