module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');

let gifs = ['https://cdn.discordapp.com/attachments/399448944889036801/568134475893178390/unnamed_2.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/591264924408479754/3cd47d7d79d0da15a7408fea69c8c64c.gif',
           'https://cdn.weeb.sh/images/HJKpm1twW.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/656900755009044530/56f2d1cf-028b-4008-b7c0-4e52dd26d123.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/656900788752482304/278282a2-df5a-407b-8e86-08bbb57e2148.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507343874523188/1b1d6dc8fc18d8eec6a4f92117327fb1.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507347238223943/575aeb2945e4267ba442502674743ad1.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507353005522944/7189b36e4a0ef770cda47d2f65747ef1.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507354406420521/40ef24388a01ba9be6da6dea69d30fda.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693507467606360084/c273dd9aa6b89498d31fe266ea1a2895.gif'] 
// ponlos así, queda mas limpio el code xd vale uwu

let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 


const embed = new Discord.RichEmbed()
if(!message.mentions.users.first()) return message.reply('Por favor menciona a alguien para abofetear.')
embed.setDescription(message.author + ' le dio una bofetada a ' + message.mentions.users.first())
   embed.setImage(randomIMG)
    embed.setColor("RANDOM")
message.channel.send(embed)
 

}