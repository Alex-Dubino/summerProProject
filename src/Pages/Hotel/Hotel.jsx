import "./Hotel.scss";
import AboutUsInNumbers from "../../Components/AboutUsInNumbers/AboutUsInNumbers";
import AboutService from "../../Components/AboutService/AboutService";
import OurComplex from "../../Components/OurComplex/OurComplex";
import Swiperr from "../../Components/Swiper/Swiper";
import Catalog from "../../Components/Catalog/Catalog";
export default function Hotel() {
  return (
    <div className="container">
      <OurComplex />
      <Swiperr />
      <Catalog />
      <AboutService />
      <AboutUsInNumbers />
    </div>
  );
}
