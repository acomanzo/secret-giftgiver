const http = require('http');
const nodemailer = require('nodemailer') 
const emails = require('./emails.json')

function onRequest(request, response) {
    console.log(`A user made a request: ${request.url}`);

    // 200 code ok
    response.writeHead(200, {'Context-Type': 'text/plain'});
    response.write('Thanks for using the app, champ.');

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        auth: {
            user: 'YOUR EMAIL GOES HERE',
            pass: 'YOUR PASSWORD GOES HERE'
        }
    });

    // make object to hold the pairs where key is the giver and value is the receiver
    var pairs = {};

    // make object to hold people that have been picked as recipients
    var pickedRecipients = {};

    // a list of the keys aka emails
    var keys = Object.keys(emails)
    // go through each email, picking a random receiver that hasn't been picked yet
    for (key in emails) {
        var recipientEmail = keys[keys.length * Math.random() << 0];
        while (recipientEmail in pickedRecipients || key === recipientEmail) {
            recipientEmail = keys[keys.length * Math.random() << 0];
        }
        pairs[key] = recipientEmail;
        pickedRecipients[recipientEmail] = recipientEmail;
    }

    // send the emails
    for (key in pairs) {
        const body = 
        '<div style="color: yellow; text-align: center;">' + 
            '<h1>Hey there, ' + emails[key] + '.</h1>' +
            '<p>You get to find a gift for <b>' + emails[pairs[key]] + '</b>.</p>' + 
            '<p>Yours in heart,<br>YOUR FANCY NAME HERE</p>' +
        '</div>';

        const mailOptions = {
            from: 'YOUR EMAIL GOES HERE',
            to: key, 
            subject: 'Secret Non-Denominational Gift Giving Boogaloo',
            html: body 
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(`Email sent to ${key}: ${info.response}`);
            }
        });
    }

    response.end();
}

// listen on port 8080
http.createServer(onRequest).listen(8888);
console.log('Server started...')