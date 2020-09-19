module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
const translate = require("@vitalets/google-translate-api")

let lang = args[0];
let msg = args.slice(1).join(' ');

if (!lang) return message.channel.send(`**Necesitas colocar a que idioma vas a traducir el texto 💢**`);
if (!msg) return message.channel.send(`**Necesitas colocar el mensaje a traducir 💢**`);

translate(msg, {to: lang}).then(res => {
      message.channel.send(`${message.author}, ${res.text}`);
    }).catch(err => {
      console.error(err);
    });

}
