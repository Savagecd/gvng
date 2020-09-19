module.exports = async (client, member) => { 
   const Discord = require("discord.js");
  let canal = client.channels.get('697667437797179492'); 
  const embed = new Discord.RichEmbed()
 .setTitle(`<a:aea2:706968900566515782> Bienvenido ${member.user.username} <a:aea:706968918857875531>`)
 .setDescription(`Hola bienvenido a ${member.guild.name} !`)
 .setThumbnail(`${member.user.avatarURL}`)
 .addField('👋 | Sabias que...', `Eres el ${member.guild.members.size} aqui en el servidor`)
 .addField('🛡 | Tag de usuario', `${member.user.tag} (${member.id}) `)
 .addField('👮 | Evite el castigo!', 'Lea nuestras reglas en <#697667438485176340> para evitar ser castigado en el servidor!')
 .addField('⭕ | Videos de Neo', 'Aquí encontrarás todos los videos de los miembros de Neo en <#697667445447589959>')
 .setTimestamp()
 .setColor('RANDOM')
 .setFooter(`× ${member.guild.name} ×`)
canal.send(embed)
}
            