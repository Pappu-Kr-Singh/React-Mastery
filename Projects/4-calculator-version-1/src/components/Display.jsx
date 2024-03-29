import styles from "./Display.module.css";

function Display({ displayValue }) {
  return (
    <input
      className={styles.display}
      value={displayValue}
      type="text"
      readOnly
    />
  );
}

export default Display;
