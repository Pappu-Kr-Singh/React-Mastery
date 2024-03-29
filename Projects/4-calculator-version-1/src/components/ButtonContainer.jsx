import styles from "./ButtonContainer.module.css";

function ButtonContainer({ onButtonclick }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((btn) => (
        <button
          key={btn}
          className={styles.btn}
          onClick={() => onButtonclick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
