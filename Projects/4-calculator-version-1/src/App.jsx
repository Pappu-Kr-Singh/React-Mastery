import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  let [calVal, setCalVal] = useState("");

  const handleBtnClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.calculator}>
          <Display displayValue={calVal} />
          <ButtonContainer onButtonclick={handleBtnClick} />
        </div>
      </div>
    </>
  );
}

export default App;
