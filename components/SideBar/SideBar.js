import SideBarMenu from '../SideBarMenu/SideBarMenu';

import styles from '../../styles/SideBar/SideBar.module.css';

const SideNavBar = () => {
  return (
    <div className={styles.sidebar}>
      <SideBarMenu />
    </div>
  );
};

export default SideNavBar;
