module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');

let gifs = ['https://cdn.discordapp.com/attachments/399448944889036801/608649427929792546/punch3.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/608645883487322112/kill.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/656904819835011096/61c9f1a5-ba7c-4f37-b349-007df064629f.gif',
           'https://25.media.tumblr.com/b1b599b6d51dcfb89348044e006830dd/tumblr_n0l0ac210Z1sa0n84o1_400.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/620655855825715219/41b3fa86-0635-4a87-aafd-ff31463ac265.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/644549389762822145/1a36a3ec-917c-44e8-8c02-f966fafd4819.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/651506952152809482/c8279fec-8b6e-43e3-aa98-d81938252061.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/655839365565513779/80f623fa4a9fe7d0c8a741b92f29d31f.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/608649210757251082/punch.gif',
           'https://media1.giphy.com/media/14igRO8Okm42rK/source.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/638921815493967910/ezgif.com-video-to-gif_1.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/608652401221828638/kill.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/655839363623813150/947bf5ae08f8d48d6eec17dd8324b59f.gif',
           'https://cdn.discordapp.com/attachments/399448944889036801/595828073400893465/tenor_14.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693504183848140830/ba74bee37501bfc3f7a2dd883f4738f8.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693504183218995260/b6c2c663e113e077b8cf88db9e1b27ba.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693504181507588187/ec5963f08652a109bebe92bd12f1d7be.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693504154064388117/4603a35480a5f11a60330c6347a7bbb5.gif',
           'https://cdn.discordapp.com/attachments/568556371864190991/693504507166064700/d12a1d81b98a743258375aa758b7f6d9.gif'] 

let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 


const embed = new Discord.RichEmbed()
if(!message.mentions.users.first()) return message.reply('Por favor menciona a alguien para matar.')
embed.setDescription(message.author + ' mato a ' + message.mentions.users.first())
   embed.setImage(randomIMG)
    embed.setColor("RANDOM")
message.channel.send(embed)
 

}