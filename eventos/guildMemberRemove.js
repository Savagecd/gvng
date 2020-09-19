module.exports = ('guildMemberRemove', (client, member) => {
  const Discord = require('discord.js'); 
  let msgChannel = new Discord.RichEmbed()
  .setTitle('Adios 👋')
  .setThumbnail(`${member.user.avatarURL}`)
     .setDescription(member.user.username + ' dejo el servidor!')
     .setFooter('Ahora somos ' + member.guild.memberCount + ' miembros.' )
     .addField('🛡 Su ID y TAG era', `${member.user.tag} (${member.id}) `)
     .setColor("RANDOM") 
   let channel = client.channels.get('697667480671354980');
   channel.send(msgChannel);

})
