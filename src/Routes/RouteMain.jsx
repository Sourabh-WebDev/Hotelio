import { Route, Switch } from "react-router-dom";
import { PaymentMain } from "../Components/Payment/PaymentMain";
import HomeMain from "../Components/Home/HomeMain";
import { RoomDetails } from "../Components/RoomDetail/RoomDetails";
import { HotelOptions } from "../Components/HotelOptions";
import Facilities from "../Components/Facilities";
import Login from "../Components/LoginSignup/Login";
import SignUp from "../Components/LoginSignup/SignUp";

export function RouteMain() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomeMain />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/SignUp" exact>
          <SignUp />
        </Route>
        <Route path="/hotels">
          <HotelOptions />
        </Route>
        <Route path="/OurFacilities">
          <Facilities />
        </Route>
        <Route path="/hoteldetail/:id">
          <RoomDetails />
        </Route>
        <Route path="/contact">Contact Page</Route>
        <Route path="/about-us">About Page</Route>
        <Route path="/services">Services Page</Route>
        <Route path="/login">Login Page</Route>
        <Route path="/payment/:id">
          <PaymentMain />
        </Route>
        <Route>
          <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}
