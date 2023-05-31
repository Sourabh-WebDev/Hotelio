import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Process = () => {
    return (
        <div>
            
            <img width={1600} src='/Images/Process.png' />

            <div>
                <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ paddingLeft: 20 }} variant="h5" gutterBottom>
                                Book & relax
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ paddingLeft: 10 }} variant="h5" gutterBottom>
                                Smart checklist
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ paddingLeft: 0 }} variant="h5" gutterBottom>
                                Save more
                            </Typography>

                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Process