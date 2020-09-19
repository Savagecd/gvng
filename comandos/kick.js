module.exports = (client, message, args) => { 
    
const Discord = require("discord.js")



    let user = message.mentions.users.first(); 
let razon = args.slice(1).join(' ');   

var perms = message.member.hasPermission("KICK_MEMBERS"); 

if(!perms) return message.channel.send("❌No tienes permisos para ejecutar este comando."); 
if (message.mentions.users.size < 1) return message.reply('Para poder expulsar a alguien por favor mencionalo.').catch(console.error); 

if (!razon) return message.channel.send("¡Hey! Necesitas poner una razon para poder expulsarlo, escribela despues de la mencion.");
if (!message.guild.member(user).kickable) return message.reply('❌ No puedo expulsar al usuario mencionado.');      
message.guild.member(user).kick(razon);



const embed = new Discord.RichEmbed()
.setAuthor("Neo Bot" , client.user.displayAvatarURL)
.setTitle("🔨 | Nuevo usuario expulsado del servidor")
.addField(`**${user.username}** ➜ fue expulsado del servidor, razón: **${razon}**`,  "👮 La persona responsable fue **➜** "+message.author.username)
.setFooter(message.author.username, message.author.displayAvatarURL)
.setTimestamp() 
.setColor('RANDOM')
message.channel.send(embed);
  }

