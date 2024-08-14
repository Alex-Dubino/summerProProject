import "./Activities.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ActivitiesHero from "../../Components/ActivitiesHero/ActivitiesHero";
import ActivitiesMain from "../../Components/ActivitiesMain/ActivitiesMain";
import ActivitiesMenu from "../../Components/ActivitiesMenu/ActivitiesMenu";
import ActivitiesInfo from "../../Components/ActivitiesInfo/ActivitiesInfo";
export default function Activities() {
  return (
    <div>
      <div className="navbar-activities">
        <Navbar />
      </div>
      <ActivitiesHero />
      <ActivitiesMain />
      <ActivitiesMenu />
      <ActivitiesInfo />
      <Footer />
    </div>
  );
}
