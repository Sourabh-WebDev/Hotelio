function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-sec1">
          <div>
            {/* <img src="/Images/UnionWhite.png" alt="UnionWhite" /> */}
            <p>The World’s Fastest Growing Hotel Chain</p>
          </div>
          <div>
            <p>Join our network and grow your business!</p>
            <button>
              <img src="/Images/property.png" alt="property" />
              List your rooms<br/>
              with Hotelio
            </button>
          </div>
        </div>
        <div className="footer-sec3">
          <div>
            <h3>About Us</h3>
            <p>Your Frendly Neighbourhood Hotel</p>
          </div>
          <div>
            <h3>Useful Links</h3>
            <p>Executive Stays</p>
          </div>
          <div>
            <h3>Hotelio Facilities</h3>
            <p>Unlocking Homes</p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>Unlocking Homes</p>
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
            <img src="/Images/facebookIcon.png" alt="img" />
            <img src="/Images/InstagramIcon.png" alt="img" />
            <img src="/Images/TwitterIcon.png" alt="img" />
            <img src="/Images/MediaIcon.png" alt="img" />
            <img src="/Images/PinIcon.png" alt="img" />
          </div>
          <div>
            <p>2013-2021 © Oravel Stays Private Limited</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
