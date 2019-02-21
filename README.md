# Webhook for Dialogflow Agent

This project is used as a webhook in my Dialogflow agents. It is a simple REST API using Express framework.

## Getting Started

It provides fulfillment for following two chatbots

### Movie&Weather chatbot

A simple demo bot that can give information about movies by movie name and give weather information of any city by its name.

### Hindi chatbot

Built to demonstrate how a Hindi chatbot can be created and trained. It can save phone numbers and retrive them when requested by the user. It is integrated with a custom frontend which can be found [here](https://github.com/prandon/chatbot_frontend).

## Installing

A step by step series of examples that tell you how to get a development env running

Install all dependencies by

```
npm install
```

And run the project by

```
node app.js
```

and you are ready to go.

## Built With

* [NodeJS](https://nodejs.org) 
* [Express](https://expressjs.com/) 
* [Mongoose](https://mongoosejs.com/)

## Authors

* **Pranjal Nartam** - *Initial work* - [prandon](https://github.com/prandon)

## Acknowledgments

### Tutorial for webhook:
* https://chatbotslife.com/creating-a-nodejs-based-webhook-for-intelligent-bots-a91ecbe33402
* https://chatbotslife.com/api-ai-lets-create-a-movie-chatbot-in-minutes-f68d8bb568f9
* https://medium.com/@pallavtrivedi03/how-to-make-a-webhook-for-dialogflow-fulfillment-d02835cc50bf
* https://medium.com/@pallavtrivedi03/integrating-dialogflow-as-a-chat-bot-in-an-ios-app-e66a4c7f2723
* https://medium.com/@pallavtrivedi03/building-a-chat-bot-having-ai-is-easy-2b52a4ce74fa
* https://blog.depado.eu/post/dialogflow-golang-webhook

### Webhook V2 response format:
https://dialogflow.com/docs/reference/v1-v2-migration-guide-fulfillment#v2-webhook-response

//response format required
{
    "fulfillmentText": "sentece",
    "fulfillmentMessages": [
        {
            "text": {
                "text": [
                    "sentence"
                ]
            }
        }
    ],
    "source": "example.com"
}