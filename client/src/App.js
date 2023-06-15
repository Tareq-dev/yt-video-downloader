import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Usage from "./components/Usage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Header />
      <Usage />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
