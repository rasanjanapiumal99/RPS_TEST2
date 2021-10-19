/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+94712174349
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'aivi', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'TEST 01', description: "MAN PONNAYEK", rowId:" rowid1"},
        {title: 'TEST 02', description: "MAN PONNAYEK", rowId:"rowid2"},
        {title: 'TEST 03', description: "MAN PONNAYEK", rowId:" rowid3"},
        {title: 'TEST 04', description: "MAN PONNAYEK", rowId:" rowid4"},
        {title: 'TEST 05', description: "MAN PONNAYEK", rowId:" rowid5"},
        {title: 'TEST 06', description: "MAN PONNAYEK", rowId:" rowid6"}
       ]

       const sections = [{title: "Queen Aivi ❤️", rows: rows}]

       const button = {
        buttonText: 'TEST',
        description: "TEST",
        sections: sections,
        listType: 2
       }

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));
