module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
const marsnpm = require("marsnpm"); //instalamos marsnpm obiamente

let author = message.author.username;
    let user = message.mentions.users.first();
let res = await marsnpm.google(args.join(" "))
return message.channel.send(res)
}  