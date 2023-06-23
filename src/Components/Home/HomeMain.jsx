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
import ResponsiveHeader from "./ResponsiveHeader";
import AboutUs from "./AboutUs";

function HomeMain() {
  return (
    <div className="App">
      <StickyNavbar />
      <ResponsiveHeader />
      {/* <NavbarHome /> */}
      <Locations />
      <SearchField />
      {/* <Banner /> */}
      <WorldwideMarketing />
      <Testimonial />
      <AboutUs />
      <Process />
      <SliderComponent />
      <Footer />
    </div>
  );
}

export default HomeMain;
