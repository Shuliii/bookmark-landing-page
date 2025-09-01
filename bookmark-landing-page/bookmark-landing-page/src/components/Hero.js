import BlueButton from "./UI/BlueButton";

import styles from "./Hero.module.css";

import HeroImg from "../assets/illustration-hero.svg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__content}`}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h1 className={styles.title}>A Simple Bookmark Manager</h1>
            <p className={styles.subtitle}>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className={styles.button__container}>
              <BlueButton className={styles.blue__button}>
                Get it on Chrome
              </BlueButton>
              <button className={styles.white__button}>
                Get it on Firefox
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <img src={HeroImg} alt="Hero" />
            {/* <div className={styles.capsuleBlue}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
