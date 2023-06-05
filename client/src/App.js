import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Usage from "./components/Usage";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Header />
      <Usage />
    </div>
  );
}

export default App;
