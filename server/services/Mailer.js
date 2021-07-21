const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

class Mailer extends helper.Mail {
    constructor(campaign, content) {//Content must be a string
        super();
        
        //THIS methods refer to original sendgrid helper mail class
        this.sgApi = sendgrid(process.env.SENDGRID_API_KEY);
        this.from_email = new helper.Email(process.env.FROM_EMAIL);
        this.subject = campaign.subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(campaign.recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    //EXTRACT AND FORMAT EMAIL FROM RECIPIENT OBJECTS
    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });

        this.addPersonalization(personalize);
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        let response = await this.sgApi.API(request);
        return response;
    }
}

module.exports = Mailer;