import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListItems from "./component/ListItems";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState(["chai", "roti", "salad"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <div className={styles.main}>
      <Container>
        <FoodInput handleKeyDown={onKeyDown} />
        <ListItems items={foodItems} />
      </Container>
    </div>
  );
}

export default App;
