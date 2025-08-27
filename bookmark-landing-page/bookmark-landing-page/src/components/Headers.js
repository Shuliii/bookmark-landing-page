import Logo from "../assets/logo-bookmark.svg";
import styles from "./Headers.module.css";
const Headers = () => {
  return (
    <nav>
      <div className={`${styles.container} ${styles.flex}`}>
        <img src={Logo} alt="My Logo" />
        <ul>
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
