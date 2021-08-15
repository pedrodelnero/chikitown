import Link from 'next/link';

import packagesStyles from '../../../styles/PartyPackages/Packages.module.css';

const Packages = () => {
  return (
    <div className={packagesStyles.container}>
      <h1>PACKAGES</h1>
      <div className={packagesStyles.packagesContainer}>
        <div className={packagesStyles.packageContainer}>
          <h2 className={packagesStyles.packageName}>DOWNTOWN</h2>
          <ul className={packagesStyles.packageIncluded}>
            <li>2 hr private venue</li>
            <li>
              Up to 15 guests (adult+children) <br /> Add $30 per additional
              guest
            </li>
            <li>1 juice box or water per child</li>
            <li>Set up</li>
            <li>Clean up</li>
            <li>1 Chiki staff</li>
          </ul>
          <div className={packagesStyles.packageBottonInfo}>
            <p className={packagesStyles.packagePrice}>$395</p>
            <p className={packagesStyles.packageTaxAndService}>
              + TAX + 18% SERVICE CHARGE
            </p>
          </div>
        </div>
        <div className={packagesStyles.packageContainer}>
          <h2 className={packagesStyles.packageName}>MIDTOWN</h2>
          <ul className={packagesStyles.packageIncluded}>
            <li>3 hr private venue</li>
            <li>
              Up to 30 guests (adult+children)
              <br /> Add $25 per additional guest
            </li>
            <li>
              SODA/WATER/JUICE <br /> (unlimited for all guests)
            </li>
            <li>30 slices of pizza</li>
            <li>Set up</li>
            <li>Clean up</li>
            <li>1 Chiki staff</li>
          </ul>
          <div className={packagesStyles.packageBottonInfo}>
            <p className={packagesStyles.packagePrice}>$650</p>
            <p className={packagesStyles.packageTaxAndService}>
              + TAX + 18% SERVICE CHARGE
            </p>
          </div>
        </div>
        <div className={packagesStyles.packageContainer}>
          <h2 className={packagesStyles.packageName}>UPTOWN</h2>
          <ul className={packagesStyles.packageIncluded}>
            <li>3 hr private venue</li>
            <li>
              Up to 45 guests( adult+children)
              <br /> Add $20 per additional guest
            </li>
            <li>
              SODA/WATER/JUICE <br /> (unlimited for all guests)
            </li>
            <li>60 slices of pizza</li>
            <li>Set up</li>
            <li>Clean up</li>
            <li>2 Chiki staff</li>
          </ul>
          <div className={packagesStyles.packageBottonInfo}>
            <p className={packagesStyles.packagePrice}>$895</p>
            <p className={packagesStyles.packageTaxAndService}>
              + TAX + 18% SERVICE CHARGE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
