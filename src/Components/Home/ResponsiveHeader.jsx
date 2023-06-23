import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Locations from './Locations';
import { NavLink } from 'react-router-dom';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function ResponsiveHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="/Images/HotelioLogo.png" alt="Logo" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Container for responsive behavior
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginBottom: '-10px' }}>
      <CssBaseline />
      <AppBar
        sx={{
          background: 'linear-gradient(4deg, rgba(255,255,255,1) 17%, rgba(188,124,124,0.3394607843137255) 89%),url(/Images/NavBanner.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        component="nav" >


        <Toolbar>
          {/* Menu toggle button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src="/Images/HotelioLogo.png" width={150} alt="Logo" />
          </Typography>
          {/* Desktop navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'block', color: 'black' } }}>
            {/* Navigation items */}
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            <div className='ResponsoiveHeader'>
              {/* Navigation buttons */}
              <div role='button'>Become a Member of Hotelio</div>
              <div role='button'>List your rooms in Hotelio</div>
              <div role='button'>English</div>
              <div  > <NavLink to='/login'> Login/Signup</NavLink></div>
            </div>
          </Box>
        </Toolbar>

        <Box>
          {/* <Locations /> */}
        </Box>
      </AppBar>
      {/* Mobile drawer */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* Main content */}
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* Your main content goes here */}
      </Box>
    </Box >
  );
}

ResponsiveHeader.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveHeader;
