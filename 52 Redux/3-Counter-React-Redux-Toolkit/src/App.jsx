import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessege from "./Components/PrivacyMessege";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessege /> : <DisplayCounter />}
            <Controls />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
