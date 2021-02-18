// import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Component } from "react";
import { Button, Select, MenuItem, FormControl, InputLabel, Grid } from '@material-ui/core';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

class ProductDisplay extends Component {
    
    state = {
        quantity: 1
    }
    handleClick = async (event) => {
        const stripe = await stripePromise;
        const response = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        });
        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
            console.log('STRIPE ERROR');
        }
    };
    handleChange = e => {
        this.setState({quantity: e.target.value});
        
    };

    render() {
        let unitPrice = (process.env.REACT_APP_STRIPE_UNIT_PRICE * this.state.quantity).toString();
        let cost = unitPrice.substr(0,unitPrice.length-2);
        return (
            
                <Grid
                    item
                    container
                    direction="column"
                    justify="space-around"
                    // alignItems="center"
                >
                    <Button onClick={this.handleClick} variant="contained" color="secondary">Buy Credits</Button>
                    <FormControl>
                    <InputLabel>Quantity</InputLabel>
                    <Select value={this.state.quantity} onChange={this.handleChange}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                    </FormControl>
                    <p> Selected {this.state.quantity} Credits - Costing {cost}&euro;</p>
                </Grid>
            
        );
    }
}
export default ProductDisplay;