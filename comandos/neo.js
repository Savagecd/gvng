module.exports = async (client, message, args) => {
  const Discord = require('discord.js');
 
    const role = message.guild.roles.find("name","「⚒」Pruebas") 
message.guild.member 

    const embed = new Discord.RichEmbed() 
  .addField('**🔰' + message.author.username + ' Has obtenido el rol para pedir Pruebas. 🔰**', '**Ahora pide las pruebas a uno del team**')
    .setColor('RANDOM')
  message.member.addRole(role) 
  message.channel.send(embed)     
    
}
