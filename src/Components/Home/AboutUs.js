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
                    <img width={400} src='/Images/AboutUs.png' />
                </div>
                <div style={{ display: 'grid', placeItems: 'center' }}>
                <img
                            style={{ position: 'absolute' }}
                            src="/Images/landing background map.png"
                            alt="landing background map"
                        />
                    <div style={{ display: 'grid', placeItems: 'center' }}>
                        <h2>About Us</h2>
                        <div>
                            Hotelio Is Online  Booking Platform for Easy And Comfortable  stay For Travelers throug Hotelio app and Hotelio Web.It was founded  In 13th may 2023 , Hotelio is owning by Company 'Houda Carjour Tourism pvt Ltd' Registered at Roc Kanpur Uttar pradesh.  Hotelio is India's trusted and fastest growing hotel chain network. It's India's first AI Enabled app and website.
                        </div>
                    </div>
                </div>
            </div>
            <div className="world-wide">
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <div >
                        <img
                            style={{ position: 'absolute' }}
                            src="/Images/landing background map.png"
                            alt="landing background map"
                        />
                        <div style={{ display: 'grid', placeItems: 'center' }}>
                            <h2>Our Vision</h2>
                            <div style={{ padding: '15px' }}>
                                Our Vision Is Travel Around World Should be on your Fingertips and Finding is accommodation & stay never before like dis And easy for Travelers. When You are going to New Place 'Hotelio' is Right partner For Your hassle Free Checkin. Our First Priority is Comfort stay. So next time when you are going to anywhere Hotelio Will be With you.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="world-wide-right-section">
                    <img width={500} src='/Images/AboutUsBanner.png' />
                </div>
            </div>
        </>
    );
}

export default WorldwideMarketing;
