import Link from 'next/link';

import partyBasicStyles from '../../../styles/PartyPage/BasicEvents.module.css';

const BasicEvents = () => {
  return (
    <div className={partyBasicStyles.eventBasicPackages}>
      <div className={partyBasicStyles.eventPackageItem}>
        <div className={partyBasicStyles.eventPackageItemInfo}>
          <h2>DOWNTOWN</h2>
          <p className={partyBasicStyles.eventPackageItemPrice}>$250</p>
          <p className={partyBasicStyles.eventPackageItemPriceTax}>
            + Tax + 18% Service Charge
          </p>
          <ul>
            <li>2-Hours Private Party</li>
            <li>Up to 10 people (Adult & Children)</li>
            <li>(Add. $30 per person - Max. 14 people)</li>
            <li>1 Chiki Staff</li>
            <li>Ball Pit</li>
            <li>Set-up & Clean-up</li>
          </ul>
          <div className={partyBasicStyles.eventPackageItemBottom}>
            <button>
              <Link href="https://squareup.com/appointments/book/3m05d00os956ut/FRKFX9GDA9FW8/date">
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={partyBasicStyles.eventPackageItem}>
        <div className={partyBasicStyles.eventPackageItemInfo}>
          <h2>MIDTOWN</h2>
          <p className={partyBasicStyles.eventPackageItemPrice}>$395</p>
          <p className={partyBasicStyles.eventPackageItemPriceTax}>
            + Tax + 18% Service Charge
          </p>
          <ul>
            <li>3-Hours Private Party</li>
            <li>Up to 15 people (Adult & Children)</li>
            <li>(Add. $25 per person - Max. 19 people)</li>
            <li>1 Chiki Staff</li>
            <li>Ball Pit</li>
            <li>Juice / Soda / Water / Ice</li>
            <li>Neutral cups / plates / napkins / silverware</li>
            <li>Set-up & Clean-up</li>
          </ul>
          <div className={partyBasicStyles.eventPackageItemBottom}>
            <button>
              <Link href="https://squareup.com/appointments/book/3m05d00os956ut/FRKFX9GDA9FW8/date">
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={partyBasicStyles.eventPackageItem}>
        <div className={partyBasicStyles.eventPackageItemInfo}>
          <h2>UPTOWN</h2>
          <p className={partyBasicStyles.eventPackageItemPrice}>$575</p>
          <p className={partyBasicStyles.eventPackageItemPriceTax}>
            + Tax + 18% Service Charge
          </p>
          <ul>
            <li>3-Hours Private Party</li>
            <li>Up to 20 people (Adult & Children)</li>
            <li>(Add. $20 per person - Max. 25 people)</li>
            <li>2 Chiki Staff</li>
            <li>Ball Pit</li>
            <li>3 Medium Pizza (Power Pizza)</li>
            <li>Juice / Soda / Water / Ice</li>
            <li>Neutral cups / plates / napkins / silverware</li>
            <li>Set-up & Clean-up</li>
          </ul>
          <div className={partyBasicStyles.eventPackageItemBottom}>
            <button>
              <Link href="https://squareup.com/appointments/book/3m05d00os956ut/FRKFX9GDA9FW8/date">
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicEvents;
