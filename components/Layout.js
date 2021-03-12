import Meta from './Meta';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
