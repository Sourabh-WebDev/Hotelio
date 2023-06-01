import React from 'react'
import NavbarSticky from './Home/NavbarSticky'
import Footer from './Home/Footer'
import { Card, CardMedia, Grid } from '@mui/material'

const Facilities = () => {
    return (
        <>
            <NavbarSticky />
            <Grid container padding={2} spacing={2}>
                <Grid item xs={12} md={3} >
                    <Card className='OnhoverEffect animate__animated animate__backInDown' sx={{ maxHeight: 500 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://image-tc.galaxy.tf/wipng-2diogwxp164rugp70no3jpk7k/gym-5-orig_wide.png?width=800"
                            alt="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card className='OnhoverEffect animate__animated animate__backInLeft' sx={{ maxHeight: 500 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://image-tc.galaxy.tf/wipng-2diogwxp164rugp70no3jpk7k/gym-5-orig_wide.png?width=800"
                            alt="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card className='OnhoverEffect animate__animated animate__backInDown' sx={{ maxHeight: 500 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://www.lottehotel.com/content/dam/lotte-hotel/city/mapo/facilities/spa-fitness/201110-1-2000-fac-LTMA.jpg.thumb.768.768.jpg"
                            alt="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card className='OnhoverEffect animate__animated animate__backInLeft' sx={{ maxHeight: 500 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://image-tc.galaxy.tf/wipng-2diogwxp164rugp70no3jpk7k/gym-5-orig_wide.png?width=800"
                            alt="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card className='OnhoverEffect animate__animated animate__backInUp' sx={{ maxHeight: 500 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://images.summitmedia-digital.com/spotph/images/2019/10/31/top10hotelspas-theretreatspa-1572490634.jpg"
                            alt="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card className='OnhoverEffect animate__animated animate__backInRight' sx={{ maxHeight: 500 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://image-tc.galaxy.tf/wipng-2diogwxp164rugp70no3jpk7k/gym-5-orig_wide.png?width=800"
                            alt="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card className='OnhoverEffect animate__animated animate__backInUp' sx={{ maxHeight: 500 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://media-cdn.tripadvisor.com/media/photo-s/0e/35/5d/05/enjoy-hotel-facilities.jpg"
                            alt="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card className='OnhoverEffect animate__animated animate__backInRight' sx={{ maxHeight: 500 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://image-tc.galaxy.tf/wipng-2diogwxp164rugp70no3jpk7k/gym-5-orig_wide.png?width=800"
                            alt="Paella dish"
                        />
                    </Card>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default Facilities