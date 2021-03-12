import SideBarMenu from '../SideBarMenu/SideBarMenu';

import SideBarStyles from '../../styles/SideBar/SideBar.module.css';

const SideNavBar = () => {
  return (
    <div className={SideBarStyles.sidebar}>
      <SideBarMenu />
    </div>
  );
};

export default SideNavBar;
