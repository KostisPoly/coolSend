import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Button, Toolbar, Typography, Avatar, Grid } from "@material-ui/core"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductDisplay from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {//Auth reducer 3 possible return cases
            case null:
                return ;
            case false:
                return <Button href="/auth/google">Login with Google</Button>;
            default:
                return (
                    <Grid item container xs direction="row" justify="flex-end">
                        <Avatar alt="user avatar" src=""></Avatar>
                        <ProductDisplay />
                    </Grid>
                )

        }
    }
    render() {

    
        return (
            <AppBar position="static">
                <Toolbar>
                    <Grid container item xs direction="row" justify="space-evenly">
                        <Typography variant="h4">
                            <Link to={this.props.auth ? '/success' : '/'}>
                                CoolSend
                            </Link>
                        </Typography>
                        {this.renderContent()}
                    </Grid>
                    
                </Toolbar>
            </AppBar>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps)(Header);