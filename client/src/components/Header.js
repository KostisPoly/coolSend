import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Button, Toolbar, Typography, Avatar } from "@material-ui/core"
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
                return <Avatar alt="user avatar" src=""></Avatar>
        }
    }
    render() {

    
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4">
                        <Link to={this.props.auth ? '/success' : '/'}>
                            CoolSend
                        </Link>
                    </Typography>
                    {this.renderContent()}
                    <ProductDisplay />
                </Toolbar>
            </AppBar>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps)(Header);