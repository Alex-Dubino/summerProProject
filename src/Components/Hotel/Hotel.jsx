import "./Hotel.scss";
import Footer from "../Footer/Footer";
import AboutUsInNumbers from "../AboutUsInNumbers/AboutUsInNumbers";
import AboutService from "../AboutService/AboutService";
import OurComplex from "../OurComplex/OurComplex";
import Swiperr from "../Swiper/Swiper";
import Catalog from "../Catalog/Catalog"
import Header from "../Header/Header";
export default function Hotel() {
  return (
    <div className="container">
      <Header/>
      <OurComplex />
      <Swiperr/>
      <Catalog/>
      <AboutService />
      <AboutUsInNumbers />
      <Footer />
    </div>
  );
}
