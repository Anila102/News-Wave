// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// export default class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
//                     <div className="container-fluid">
//                         <Link className="navbar-brand" to="/">News Wave</Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link " aria-current="page" to="/">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link " to="/business">Business</Link>
//                                 </li>

//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/entertainment">Entertainment</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/health">Health</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/science">Science</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/sports">Sports</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/technology">Technology</Link>
//                                 </li>




//                             </ul>
//                             <form className="d-flex">
//                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                                 <button className="btn btn-outline-success" type="submit">Search</button>
//                             </form>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }

import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link'
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';


import NewspaperIcon from '@mui/icons-material/Newspaper';
const pages = ['Business', 'Sports', 'Entertainment', 'Health', 'Science', 'Technology'];

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="sticky" >
      <Container maxWidth="xl" 
      
       >
        <Toolbar disableGutters>
          <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            News Wave
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu

              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted

              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                  sx={{textDecoration: 'none' , color:"black"}}
                  component={Link}
                    href={page}
                    >
                    {page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NewspaperIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography

            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            News Wave
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <Button 
                href={page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display:"flex" , justifyContent: "center"}}
              >
                {page}
              </Button>
                ))}
           </Box> 
            



        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;