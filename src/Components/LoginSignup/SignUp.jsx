import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function SignUp() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlippedS, setIsFlippedS] = useState(false);

    const handleClick = () => {
        setIsFlippedS(false)
        setIsFlipped(!isFlipped);
    };

    const handleClickS = () => {
        setIsFlipped(false);
        setIsFlippedS(!isFlippedS)
    };


    return (
        <div className='login-backbanner' >

            <div className='SignUp-section'>
                <div className={`cards ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                    <div className="card-front">
                        {/* Content for the front side of the card */}
                        <h2>Front Side</h2>
                    </div>
                    <div className="card-back">
                        <Container sx={{ backgroundColor: '#b9c9d1d9', borderRadius: '5px' }} component="main" maxWidth="sm">
                            <CssBaseline />
                            <Box
                                sx={{
                                    margin: 10,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <img width={150} src="/Images/HotelioLogo.png" alt="" />
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        className='login-button'
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/SignUp" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                            <Copyright sx={{ mt: 8 }} />
                        </Container>
                    </div>
                </div>
                <div className={`cards ${isFlippedS ? 'flipped' : ''}`} onClick={handleClickS}>
                    <div className="card-front">
                        {/* Content for the front side of the card */}
                        <h2>Front Side</h2>
                    </div>
                    <div className="card-back">
                        {/* Content for the back side of the card */}
                        <h2>Back Side</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}