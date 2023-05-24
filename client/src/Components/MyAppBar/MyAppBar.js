import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MyAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <AppBar position="static" sx={{ background: '#FCFAFA' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="black"
          aria-label="menu"
          sx={{ ml: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu 
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 1,
        }}
        >
        <MenuItem className="MenuItem" onClick={handleClose} >
          <Link to ="../" className="MenuLink">Home</Link>
        </MenuItem>
        <MenuItem className="MenuItem" onClick={handleClose} >
          <Link to ="../Projects" className="MenuLink">Projects</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} >
        <Link to ="../About" className="MenuLink">About</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} >
          <Link to ="../Contact/ContactForm" className="MenuLink">Contact</Link>
        </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;