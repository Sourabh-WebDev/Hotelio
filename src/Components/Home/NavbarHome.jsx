import { Link } from "react-router-dom";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function NavbarHome() {

  return (
    <>
      <header>
        <div className="master-div-navbar">
          <div className="navbar-logo animate__animated animate__lightSpeedInLeft">
            <img src="/Images/HotelioLogo.png" width={140} alt="Union" />
          </div>
          <div className="navbar-right-section">
            <div style={{ display: 'flex', padding: "5px 10px", alignItems: 'center' }}>
              {/* <img src="/Images/listProperty.png" alt="becomeMember" /> */}
              <GroupAddOutlinedIcon sx={{ paddingRight: 1 }} />
              <div>
                Become a Memeber <br />
                of Hotelio
              </div>
            </div>
            <div style={{ display: 'flex', padding: "5px 10px", alignItems: 'center' }}>
              {/* <img src="/Images/listProperty.png" alt="becomeMember" /> */}
              <ApartmentOutlinedIcon sx={{ paddingRight: 1 }} />
              <div>
                List your rooms <br />
                with Hotelio
              </div>
            </div>
            <div>
              <img src="/Images/language.png" alt="language" />
            </div>
            <div>
              <Link to='/Login' style={{ display: 'flex', padding: "5px 10px", alignItems: 'center', color:'black' }}>
                <AccountCircleOutlinedIcon sx={{ paddingRight: 1 }} />
                <div>
                  Login / Signup
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavbarHome;
