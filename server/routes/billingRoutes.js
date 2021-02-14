require('dotenv').config({path: '../config.env'});
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = app => {
    const YOUR_DOMAIN = 'http://localhost:3000/api/checkout';
    
    app.post('/api/create-checkout-session', async (req, res) => {
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                price_data: {
                    currency: 'eur',
                    product_data: {
                    name: 'Stubborn Attachments',
                    images: ['https://i.imgur.com/EHyR2nP.png'],
                    },
                    unit_amount: process.env.STRIPE_UNIT_PRICE,
                },
                quantity: req.body.quantity,
                },
            ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true&quantity=${req.body.quantity}`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });
        res.json({ id: session.id });
    });

    app.get('/api/checkout', async (req, res) => {
        
        if(req.user) {
    
            if(req.query.success === 'true') {
                //Parse and add quantity then save to db credits
                req.user.credits += parseInt(req.query.quantity);
                const user = await req.user.save();
                
                res.redirect('/success');
            } else if(req.query.success === 'false') {
                res.redirect('/failed');
            }

        } else {
            return res.status(401).send({ error: 'No logged in user!' });
        }

    });
}
