import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar } from "@material-ui/core"

const Header = () => {
    
    return (
        <AppBar position="static">
            <Toolbar>CoolSend</Toolbar>
        </AppBar>
    )
    
}
export default Header;