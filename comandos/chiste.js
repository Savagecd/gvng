
  module.exports = async (client, message, args) => { 
const Discord = require('discord.js')
const superagent = require('superagent')
superagent
.get("https://risapi.glitch.me/")
.end((err,res) =>{
let body = res.body; 
  
let doncomedia = new Discord.RichEmbed()

.setDescription(body.chiste)
.setColor('RANDOM')
.setFooter(`Chiste pedido por ${message.author.username}`)

message.channel.send(doncomedia)
  
  
})
}
  