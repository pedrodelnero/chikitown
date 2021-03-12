import { useState } from 'react';
import Layout from '../components/Layout';
import Mobile from '../context/Mobile';
import Nav from '../components/Nav/Nav';
import SideBar from '../components/SideBar/SideBar';
import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Layout>
      <Mobile.Provider
        value={{
          isSidebarOpen,
          setIsSidebarOpen,
        }}
      >
        <Nav />
        {isSidebarOpen ? <SideBar /> : <Component {...pageProps} />}
      </Mobile.Provider>
    </Layout>
  );
}

export default MyApp;
