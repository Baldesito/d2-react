import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterRendirizza from "./components/FooterRendirizza";
import WelcomShop from "./components/WelcomShop";
import CustomNavBars from "./components/CustomNavBars";

function App() {
  return (
    <div className="App">
      <CustomNavBars />
      <header className="App-header">
        <div className="hero">
          <WelcomShop />
        </div>
      </header>

      <FooterRendirizza />
    </div>
  );
}

export default App;
