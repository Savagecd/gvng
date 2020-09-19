  module.exports = async (client, message, args) => { 
   const Discord = require('discord.js');
let ping = Math.floor(message.client.ping);
const pong = new Discord.RichEmbed()
.setDescription("Verificando el ping...")
.setColor("RANDOM");
      message.channel.send(pong)
.then(async m => {
setTimeout(() => {
const embed = new Discord.RichEmbed()
.setTitle("PING")
.setDescription(":incoming_envelope:  Ping mensajes : `"+ping+" ms.`\n :satellite_orbital: Ping DiscordAPI : `"+ping+" ms`")
.setFooter("NeoBot")
.setTimestamp() 
.setColor("RANDOM");
m.edit(embed)
}, 1000);
      });  
}