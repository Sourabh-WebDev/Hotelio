import React, { useState } from "react";

function WorldwideMarketing() {
  const [uae, setuae] = useState(false);
  const [nepal, setnepal] = useState(false);
  const [china, setchina] = useState(false);
  const [india, setindia] = useState(false);
  const [malayasia, setmalayasia] = useState(false);
  const [indo, setindo] = useState(false);
  const handleUae = () => {
    setuae(true);
  };
  const handlenepal = () => {
    setnepal(true);
  };
  const handlechina = () => {
    setchina(true);
  };
  const handleindia = () => {
    setindia(true);
  };
  const handlemalayasia = () => {
    setmalayasia(true);
  };
  const handleindo = () => {
    setindo(true);
  };
  return (
    <>
      <div className="world-wide">
        <div>
          <div>
            <img
              style={{ position: 'absolute' }}
              src="/Images/landing background map.png"
              alt="landing background map"
            />
            <div className="world-wide-right-section">
              <p>India’s No. 1 Fastest Leading Hotel Chain</p>
              <p>More Destibations More Ease. More Affordable.</p>
              <div>
                <p>
                  <span>80</span>
                  <br />
                  Cities
                </p>
                <p>
                  <span>45000+</span> <br />
                  Hotels
                </p>
                <p>
                  <span>150,000</span> <br />
                  Vacation Homes
                </p>
              </div>
              <ul>
                <li>Mumbai</li>
                <li>Delhi</li>
                <li>Kolkata</li>
                <li>Chennai</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="world-wide-right-section">
          <img width={500} src='/Images/Places.jpg' />
        </div>
      </div>
    </>
  );
}

export default WorldwideMarketing;
