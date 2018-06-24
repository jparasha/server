const sendgrid= require('sendgrid');
const helper= sendgrid.mail;
const keys = require('../config/keys');
//console.log('===============');
class Mailer extends helper.Mail{
    constructor({ subject, recipients  }, content){
        super();
        //console.log('22222222222222222222222222222');
        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email= new helper.Email('no-reply@feedusback.com');
        this.subject= subject;
        this.body= new helper.Content('text/html', content);
        this.recipients= this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }
    formatAddresses(recipients){
        return recipients.map(({email}) =>{
         //   console.log('3333333333333333');
            return new helper.Email(email);
        });
    }
    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
        //console.log('444444444444444444444');
    }
    addRecipients(){
        const personalize = new helper.Personalization();

        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
        //console.log('55555555555555555');
    }
    async send(){
        console.log('---------');
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path : '/v3/mail/send',
            body : this.toJSON()
        });
        const response= await this.sgApi.API(request); 
       return response;
    }
}

module.exports = Mailer;