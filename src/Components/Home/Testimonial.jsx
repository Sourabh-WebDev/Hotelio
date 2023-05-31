import { Avatar } from '@mui/material';
import React from 'react'
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Testimonial = () => {
    return (
        <div>
            <Slider {...settings}>
                <div className="bubble">
                    <blockquote>
                        <img width={60} height={60} style={{ borderRadius: '50%', marginRight:'10px' }} src='https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg' />
                        I refuse to accept the view that mankind is so tragically bound to the starless midnight of racism and war that the bright daybreak of peace and brotherhood can never become a reality... I believe that unarmed truth and unconditional love will have the final word.
                    </blockquote>
                    <div></div>
                    <cite> Martin Luther King, Jr.</cite> </div>
                <div className="bubble">
                    <blockquote>
                        <img width={60} height={60} style={{ borderRadius: '50%', marginRight:'10px' }} src='https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg' />
                        Peace is not a relationship of nations. It is a condition of mind brought about by a serenity of soul. Peace is not merely the absence of war. It is also a state of mind. Lasting peace can come only to peaceful people.
                    </blockquote>
                    <div></div>
                    <cite> Jawaharlal Nehru</cite> </div>
                <div className="bubble">
                    <blockquote>
                        <img width={60} height={60} style={{ borderRadius: '50%', marginRight:'10px' }} src='https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg' />
                        Forgiveness is not always easy. At times, it feels more painful than the wound we suffered, to forgive the one that inflicted it. And yet, there is no peace without forgiveness.
                    </blockquote>
                    <div></div>
                    <cite> Marianne Williamson</cite> </div>
                <div className="bubble">
                    <blockquote>
                        <img width={60} height={60} style={{ borderRadius: '50%', marginRight:'10px' }} src='https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg' />
                        Of all our dreams today there is none more important - or so hard to realise - than that of peace in the world. May we never lose our faith in it or our resolve to do everything that can be done to convert it one day into reality. </blockquote>
                    <div></div>
                    <cite> Lester B. Pearson</cite> </div>
            </Slider>
        </div>
    )
}

export default Testimonial