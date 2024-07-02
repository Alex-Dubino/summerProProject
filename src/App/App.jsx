import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Hotel from "../Pages//Hotel/Hotel";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Hotel />
      <Footer />
    </div>
  );
}

export default App;
