module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');

let gifs = ['https://cdn.discordapp.com/attachments/568556371864190991/693507810855485530/041a162ee679a98b7d488fa0b85400d2.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507826152112228/9c301b7a78508e60d0e1e2b9cc1ccddb.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507844141613146/e2780fd751b0c7b3dd65708d2faa2133.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507847958298634/8c069fdd16f22798561237a94a6c1023.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507850181410866/c718d7517aec454697998c68ab0cd2fb.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507857043161159/ae2b28e5cdaec542b0b67f3ca9adb9c6.gif'] 

let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 


const embed = new Discord.RichEmbed()
if(!message.mentions.users.first()) return message.reply('Por favor menciona a alguien para acariciar.')
embed.setDescription(message.author + ' acaricio a ' + message.mentions.users.first())
   embed.setImage(randomIMG)
    embed.setColor("RANDOM")
message.channel.send(embed)
 

}