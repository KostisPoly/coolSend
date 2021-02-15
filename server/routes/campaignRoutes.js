const mongoose = require('mongoose');
const recipientSchema = require('../models/Recipient');

const Campaign = mongoose.model('campaign');

module.exports = app => {
    app.post('/api/campaign', (req, res) => {
        
        if(req.user){

            if(req.user.credits > 1) {

                const { title, subject, body, recipients, feedback } = req.body;
                
                const campaign = new Campaign({
                    title,
                    subject,
                    body,
                    //recipients from req are comma separated values -- to objects( trim whitespace? )
                    recipients: recipient.split(',').map(email => ({ email: email.trim() })),
                    feedback,
                    _user: req.user.id,
                    dateSent: Date.now()
                });

            } else {
                return res.status(403).send({ error: 'Not enough credits!' });
            }
        } else {
            return res.status(401).send({ error: 'No logged in user!' });
        }
    })
}