import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Process = () => {
    return (
        <div >

            <img width='100%' height='100%' style={{ filter: 'opacity(30%)', position: 'absolute', objectFit: 'cover' }} src='https://wallpapercave.com/wp/wp1846079.jpg' />
            <div>
                <img width='100%' src='/Images/Process.png' />

                <div>
                    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography sx={{ paddingLeft: 15 }} variant="h5" gutterBottom>
                                    Book & relax
                                </Typography>

                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography sx={{ paddingLeft: 0 }} variant="h5" gutterBottom>
                                    Smart checklist
                                </Typography>

                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography sx={{ paddingRight: 15 }} variant="h5" gutterBottom>
                                    Save more
                                </Typography>

                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Process