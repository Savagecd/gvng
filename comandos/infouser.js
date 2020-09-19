module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
let User = message.mentions.users.first() 
let mencionado = message.mentions.users.first();
   let estadouser = {


   "online":"Online", 
   "idle":"Ausente",
   "dnd":"No Molestar",
   "invisible":"Invisible/Desconectado",
 } 
   
const member = message.guild.member(User);
  if(!mencionado) return message.reply('Menciona a alguien.');
message.channel.send(new Discord.RichEmbed()
      .setThumbnail(User.displayAvatarURL)
      .addField("**ID:**", `${User.id}`, true)
      .setColor('RANDOM')
      .addField("**Nick:**", `${User.tag}`, true)  
      .addField("**Apodo:**",`${member.nickname ? member.nickname : "Sin apodo"}`,true)
      .addField('**Estado**', estadouser[User.presence.status], true)
      .addField("**Jugando a:**",`${User.presence.game ? User.presence.game.name : "Nada"}`,true)
      .addField("**En servidor**", message.guild.name, true)
      .addField("**Fecha de creación:**", `${User.createdAt.toDateString()}`, true)
      .addField("**Fecha que se unio al servidor:**", `${message.member.joinedAt.toDateString()}`, true)
      .addField("**Cantidad de roles:**", `${message.guild.member(User).roles.size}`, true)              
      .addField("**Roles:**","`"+member.roles.filter(e => e.id != "628660295832961045").map(roles => `${roles.name}`).join("`, `")+"`",true)
      .addField("**¿Es un BOT?**", User.bot)
      .setFooter ("Solicitado por "+message.author.username+"", message.author.avatarURL)      
      .setTimestamp()
                   )  
 message.delete();
                    }
