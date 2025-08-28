import styles from "./Headers.module.css";

import Logo from "../assets/logo-bookmark.svg";

const Headers = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.nav__inner}`}>
        <img src={Logo} alt="My Logo" />
        <ul className={styles.nav__links}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Headers;
