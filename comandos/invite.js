module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
    client
      .generateInvite([
        "ADMINISTRATOR",
        "BAN_MEMBERS"
      ])
      .then(link => {
      let embed = new Discord.RichEmbed()
      .addField('¿Quieres invitarme a tu server?, ¡No te arrepentirás!','[**Toca aquí**](https://discord.com/api/oauth2/authorize?client_id=756360839866613771&permissions=0&scope=bot)') 
      .setFooter('Si tienes problemas para invitarme , contacta con el owner Gvng#0707')
      .setImage(`https://cdn.discordapp.com/attachments/742759714819145772/756385944227020930/7MPC.gif`)
      .setColor('RANDOM')

       message.channel.send(embed);
      });
  }
