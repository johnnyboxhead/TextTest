const axios = require("axios");
const router = require("express").Router();
const passport = require('passport');
require('../config/passport')(passport);
const Comment = require("../models/comments");
const express = require("express");
const accountSid = 'AC2dffe8065c6916762534d160462ffd17';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661',
     to: '+15558675310'
    })
    .then(message => console.log(message.sid))
    .done();

