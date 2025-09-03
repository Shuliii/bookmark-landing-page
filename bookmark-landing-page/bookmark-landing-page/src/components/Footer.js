import styles from "./Footer.module.css";

import Logo from "./UI/Logo";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <>
      <section className={styles.cta}>
        <div className={styles.container}>
          <p>35,000+ already joined</p>
          <h2>Stay up-to-date with what we’re doing</h2>
          <form>
            <input type="email" placeholder="Enter your email address"></input>
            <button>Contact Us</button>
          </form>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <Logo />
          <nav className={styles.footer__nav}>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </nav>
          <div className={styles.footer__social}>
            <img src={Facebook} alt="facebook logo" />
            <img src={Twitter} alt="twitter logo" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
