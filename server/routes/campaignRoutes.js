const mongoose = require('mongoose');
const recipientSchema = require('../models/Recipient');
const Mailer = require('../services/Mailer');
const linkTemplate = require('../services/emailTemplates/linkTemplate');
const commentTemplate = require('../services/emailTemplates/commentTemplate');
const rateTemplate = require('../services/emailTemplates/rateTemplate');

const Campaign = mongoose.model('campaign');

module.exports = app => {
    app.post('/api/campaign', async (req, res) => {
        
        if(req.user){

            const { title, subject, body, recipients, feedback } = req.body;
            // console.log(title, subject, body, recipients, feedback);
            if(req.user.credits > recipients.split(",").length) {    
                
                const campaign = new Campaign({
                    title,
                    subject,
                    body,
                    //recipients from req are comma separated values -- to objects( trim whitespace? )
                    recipients: recipients.split(',').map(email => ({ email: email.trim() })),
                    feedback,
                    _user: req.user.id,
                    dateSent: Date.now()
                });

                //MAYBE SWITCH LOGIC FOR TEMPLATE BASED ON FEEDBACK TYPE
                const mailer = new Mailer(campaign, linkTemplate(campaign));
                
                try {
                    await mailer.send();
                    //After send save campaign and user minus credits to mongodb
                    await campaign.save();
                    req.user.credits -= 1;
                    const user = await req.user.save();
                    res.send(user);
                } catch(err) {
                    res.status(422).send(err);
                }    

            } else {
                return res.status(403).send({ error: 'Not enough credits!' });
            }
        } else {
            return res.status(401).send({ error: 'No logged in user!' });
        }
    })

    app.get('/api/pick_template', (req, res) => {
        console.log(req.query.template);
        let template = '';
        switch (req.query.template) {
            case 'rate':
                template = rateTemplate('toClient');
                break;
            case 'comment':
                template = commentTemplate('toClient');
                break;
            default:
                template = linkTemplate('toClient');
                break;
        }

        res.send({ template });
    })
}