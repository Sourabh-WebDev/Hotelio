import React from "react";
import { Link } from "react-router-dom";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


function Footer() {

  return (
    <>
      <div className="footer">
        <div className="footer-sec1">
          <div>
            {/* <img width={100} src="/Images/HotelioLogo.png" alt="UnionWhite" /> */}
            <p>India’s No. 1 Fastest Leading Hotel Chain</p>
          </div>
          <div>
            <p>Join our network and grow your business!</p>
            <button>
              <img src="/Images/property.png" alt="property" />
              List your rooms<br />
              with Hotelio
            </button>
          </div>
        </div>
        <div className="footer-sec3">
          <div>
            <h3>About Us</h3>
            <p>Hotelio Is Online  Booking Platform for Easy And Comfortable <br /> stay For Travelers throug Hotelio app and Hotelio Web. <br /> It was founded  In 13th may 2023 , Hotelio is owning <br /> by Company 'Houda Carjour Tourism pvt Ltd' <br /> Registered at Roc Kanpur Uttar pradesh. <br /> Hotelio is India's trusted and fastest <br /> growing hotel chain network. <br /> It's India's first AI Enabled app and website.</p>
          </div>
          <div>
            <h3>Useful Links</h3>
            <p>Abouts Us</p>
            <p>Conatct Us</p>
            <p>Refund Policy</p>
            <p>Term & Condition</p>
            <p>Privacy & Policy</p>
          </div>
          <div>
            <Link style={{ color: "#fff" }} to='/'>
              <h3>Hotelio Facilities</h3>
              <p>Spa</p>
              <p>Fitness Center</p>
              <p>Swimming Pool</p>
              <p>jacuzzi bath</p>

            </Link>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p style={{ display: 'flex', alignItems: 'center' }} ><PhoneInTalkOutlinedIcon /> +91-7290900835</p>
            <p style={{ display: 'flex', alignItems: 'center' }} ><EmailOutlinedIcon /> info@hoteliorooms.com</p>
          </div>
        </div>
        {/* <div className="footer-sec4">
          <h2>Hotelio Hotels</h2>
          <div className="footer-sec4-flex">
            jdx
          </div>
        </div> */}
        <div className="footer-sec5">

          <div>
            <p>Download Hotelio app for excitng offers.</p>
            <br />
            <img src="/Images/appstore.png" alt="applestore" />

            <img src="/Images/playstored.png" alt="playstored" />
          </div>
          <div>
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
            <PinterestIcon />
          </div>
          <div>
            <p>2023 © www.hoteliorooms.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
