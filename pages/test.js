import Meta from '../components/Meta';
import Link from 'next/link';
import Image from 'next/image';

const test = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      <Image
        src="/static/test.HEIC"
        alt="test"
        layout="responsive"
        width={'100%'}
        height={'auto'}
      />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          top: '50%',
          left: '25%',
          height: '20%',
          width: '50%',
          backgroundColor: '#F0D80C',
          color: 'white',
          borderRadius: '30px',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2em',
        }}
      >
        <Link href="/">PRIVATE PLAY</Link>
      </div>
    </div>
  );
};

export default test;
