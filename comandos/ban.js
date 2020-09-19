module.exports = async (client, message, args) => {
  const Discord = require('discord.js');
 
let user = message.mentions.users.first(); 
const razon = args.slice(1).join(' '); 
    
var perms = message.member.hasPermission("BAN_MEMBERS"); 
if(!perms) return message.channel.send(":no_entry_sign: `Error` `|` No tienes Permisos para usar este comando.");
    
if (message.mentions.users.size < 1) return message.reply(':no_entry_sign: `ERROR` `|` Debe mencionar a alguien.').catch(console.error); 
    
if(!razon) return message.channel.send(':no_entry_sign: `ERROR` `|` Escriba un razon'); 
    
if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.'); 

  
      
message.guild.member(user).ban(razon); 

    const embed = new Discord.RichEmbed() 
   
    .setTitle(`Nuevo Baneo`)
    .setThumbnail(user.avatarURL)
    .addField("Usuario:", `${user}`)
    .addField("ID:", `${user.id}`)
    .addField("Razon:", `${razon}`)
    .addField("Mod/Admin:", `${message.author.tag}`)
    .setFooter("Sistema de Moderacion", message.author.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
      
    message.channel.send(embed) 
    
    
    }

