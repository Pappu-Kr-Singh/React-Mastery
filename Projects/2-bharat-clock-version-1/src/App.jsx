import ClockDescription from "./component/ClockDescription";
import ClockHeading from "./component/ClockHeading";
import ClockTime from "./component/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <center className="clock-container">
          <ClockHeading />
          <ClockDescription />
          <ClockTime />
        </center>
      </div>
    </>
  );
}

export default App;
