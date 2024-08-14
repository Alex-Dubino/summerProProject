import "./Spa.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SpaHero from "../../Components/SpaHero/SpaHero";
export default function Spa() {
  return (
    <div>
      <div className="navbar-spa">
        <Navbar />
      </div>

      <SpaHero />
      <h1>SPA</h1>
      <Footer />
    </div>
  );
}
