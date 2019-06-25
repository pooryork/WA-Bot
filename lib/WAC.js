const request = require('request');

function getNewMessage(messages,info = {}){
    let res = [];

    messages.forEach((msg) => {
        if (msg.fromMe == info.fromMe)
            res.push(msg);
    });

    return res;
}

class WAController {
    constructor (apiUrl, token) {
        console.log("WhatsApp API Controller by gt99 init");
        this.token = token;
        this.apiServer = apiUrl;
    }

    route (event = {}, info = {fromMe:false}) {

        if (event.messages)
            return {type:"message","messages":getNewMessage(event.messages,info)};

        if(event.ack)
            return {type:"ack","acks":[]};

        return {type:undefined};
    }

    sendMessage(message = {},responseMsg){
        request({
            url: this.apiServer+"message?token="+this.token,
            method: "POST",
            json: {
                phone: message.author,
                body: responseMsg,
            }
        });
    }
}

module.exports = WAController;