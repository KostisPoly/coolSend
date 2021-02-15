const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const campaignSchema = new Schema({
    title: String,
    subject: String,
    body: String,
    recipients: [RecipientSchema],
    feedback: {
        type: String,
        enum: ['link', 'rate', 'comment'],
        default: 'link'
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dateSent: Date
});

mongoose.model('campaign', campaignSchema);