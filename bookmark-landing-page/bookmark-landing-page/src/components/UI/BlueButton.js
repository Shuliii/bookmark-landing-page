import styles from "./BlueButton.module.css";

const BlueButton = (props) => {
  return (
    <button type={props.type} className={`${styles.button} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default BlueButton;
