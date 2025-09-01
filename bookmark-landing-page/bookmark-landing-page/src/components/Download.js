import Card from "./UI/Card";
import BlueButton from "./UI/BlueButton";
import styles from "./Download.module.css";
import Chrome from "../assets/logo-chrome.svg";
import Firefox from "../assets/logo-firefox.svg";
import Opera from "../assets/logo-opera.svg";

const Download = () => {
  return (
    <section className={styles.download}>
      <div className={styles.download__inner}>
        <h1 className={styles.title}>Download the Extension</h1>
        <p className={styles.subtitle}>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className={styles.download__cards}>
        <Card>
          <div className={styles.card__inner}>
            <img src={Chrome} alt="Chrome-logo" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
            <BlueButton className={styles.blue__button}>
              Add & Install Extension
            </BlueButton>
          </div>
        </Card>
        <Card>
          <div className={styles.card__inner}>
            <img src={Firefox} alt="Firefox-logo" />
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
            <BlueButton className={styles.blue__button}>
              Add & Install Extension
            </BlueButton>
          </div>
        </Card>
        <Card>
          <div className={styles.card__inner}>
            <img src={Opera} alt="Opera-logo" />
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
            <BlueButton className={styles.blue__button}>
              Add & Install Extension
            </BlueButton>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Download;
