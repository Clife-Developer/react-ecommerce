import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
//import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.jpg';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes=useStyles();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography to="/" variant="h6" className={classes.title} color="inherit">
            <img src={Logo} alt="commerce.js" height="25px" className={classes.image} />CLIFE'S COMMERCE
          </Typography>
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Navbar
