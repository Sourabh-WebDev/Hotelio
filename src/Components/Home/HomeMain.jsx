import "./Home.css";

import Banner from "./Banner";
import Footer from "./Footer";
import Locations from "./Locations";
import StickyNavbar from "./StickyNavbar";
import NavbarHome from "./NavbarHome";
import SearchField from "./SearchField";
import WorldwideMarketing from "./WorldwideMarketing";
import SliderComponent from "./SliderComponent";
import Testimonial from "./Testimonial";
import Process from "./Process";

function HomeMain() {
  return (
    <div className="App">
      <StickyNavbar />
      <NavbarHome />
      <Locations />
      <SearchField />
      {/* <Banner /> */}
      <WorldwideMarketing />
      <Testimonial />
      <Process />
      <SliderComponent />
      <Footer />
    </div>
  );
}

export default HomeMain;
