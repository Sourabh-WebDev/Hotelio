import React from "react";
import Slider from "react-slick";

const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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


const SliderComponent = () => {

    return (
        <div style={{ padding: '50px 0px', textAlign: 'center' }}>
            <h1 style={{ padding: '20px' }} > Explore Premium Partner's Properties With Hotelio </h1>
            <Slider {...settings}>
                <div>
                    <img width='350px' height='200px' src="https://wallpapercave.com/wp/wp6181354.jpg" />
                </div>
                <div>
                    <img width='350px' height='200px' src="https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg" />
                </div>
                <div>
                    <img width='350px' height='200px' src="https://wallpapercave.com/wp/wp6181354.jpg" />
                </div>
                <div>
                    <img width='350px' height='200px' src="https://wallpapercave.com/wp/wp6181354.jpg" />
                </div>
                <div>
                    <img width='350px' height='200px' src="https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg" />
                </div>
                <div>
                    <img width='350px' height='200px' src="https://wallpapercave.com/wp/wp6181354.jpg" />
                </div>
                <div>
                    <img width='350px' height='200px' src="https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg" />
                </div>
                <div>
                    <img width='350px' height='200px' src="https://wallpapercave.com/wp/wp6181354.jpg" />
                </div>
                <div>
                    <img width='350px' height='200px' src="https://wallpapercave.com/wp/wp6181354.jpg" />
                </div>
            </Slider>
        </div>
    )
}

export default SliderComponent