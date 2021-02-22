import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link,useLocation } from 'react-router-dom';

import Logo from '../../assets/logo2.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes=useStyles();
    const location=useLocation();
   
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
           <Toolbar>
             <Typography to="/" component={Link} variant="h5" className={classes.title} color="inherit">
               <img src={Logo} alt="commerce.js" height="70px" className={classes.image} />
          </Typography>
          <div className={classes.grow} />
             {location.pathname=='/' && (
               <div className={classes.button}>
                 <IconButton to="/cart" component={Link} aria-label="Show cart items" color="inherit">
                 <Badge badgeContent={totalItems} color="secondary">
                   <ShoppingCart />
                 </Badge>
               </IconButton>
            </div>)}
         </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
