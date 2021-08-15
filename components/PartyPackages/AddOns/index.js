import addOnsStyles from '../../../styles/PartyPackages/AddOns.module.css';

const BasicEvents = () => {
  return (
    <div className={addOnsStyles.container}>
      <h1>ADD-ONS</h1>
      <div className={addOnsStyles.packagesContainer}>
        <div className={addOnsStyles.packageContainerInline}>
          <h2>CHARACTERS</h2>
          <h3>$150</h3>
          <p>PER HOUR</p>
        </div>
        <div className={addOnsStyles.packageContainerInline}>
          <h2>ENTERTAINERS</h2>
          <h3>$175</h3>
          <p>PER HOUR</p>
        </div>
        <div className={addOnsStyles.packageContainerInline}>
          <h2>FACE PAINTER</h2>
          <h3>$125</h3>
          <p>PER HOUR</p>
        </div>
        <div className={addOnsStyles.packageContainerBottom}>
          <h2>CAKE TABLE DECORATION</h2>
          <h3>$475</h3>
          <p>4' WHITE WOODEN TABLE</p>
          <p>4'X5' PERSONALIZED BACKDROP</p>
          <p>ORGANIC BALLOON GARLAND AROUND THE BACKDROP</p>
          <p>CAKE & DESSERT STANDS</p>
        </div>
      </div>
    </div>
  );
};

export default BasicEvents;
