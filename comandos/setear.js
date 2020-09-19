module.exports = (client, message, args) => { 
  const db = require('quick.db')
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes permisos de usar este comando.')
  if(!args[0]) return message.channel.send('Especifica un parámetro, por ejemplo\n`logs`')
   if(args[0] === 'logs')
  {
    if(!args[1]) return message.channel.send('Especifica la `ID` del canal.')
    db.set('canal_de_logs', args[1])
    message.channel.send({embed:{color: client.config.color_rojo, author: { icon_url: message.guild.me.user.displayAvatarURL}, description: 'El nuevo canal de logs ahora es: ' + message.guild.channels.get(args[1]).toString() }})
  }
}