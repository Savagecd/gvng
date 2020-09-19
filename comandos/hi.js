module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');

let gifs = ['https://cdn.discordapp.com/attachments/399448944889036801/596153281294893087/3923f5e63b610771803e0d49a6283ecfb3430f56_00.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/596153283056500751/375.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/596153037912014852/tenor_7.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/596153283056500756/tumblr_ony1scKEoh1vviqkjo1_500.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/596153282330624029/saludo.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/596153391990702110/af4ef28c440fa1c2a9d24bdc27ffa8ed415e32ed_hq.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693505068258951268/b96f06f81933f49b6d24577017eb4edd.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693505082515521546/4066a57e49c748d90330db89c15af609.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693505086936186880/c460bd7b57e8e3585988120b82767229.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693505093114396774/1766e38bb48810925bf70747df140d99.gif'] 

let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 


const embed = new Discord.RichEmbed()
if(!message.mentions.users.first()) return message.reply('Por favor menciona a alguien para saludar.')
embed.setDescription(message.author + ' saludo a ' + message.mentions.users.first())
   embed.setImage(randomIMG)
    embed.setColor("RANDOM")
message.channel.send(embed)
 

}