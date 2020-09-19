module.exports = async(client, message, args) => { 
  message.delete()
    if(!message.guild.member(message.author).permissions.has('MANAGE_MESSAGES')) return message.channel.send('No tienes permisos necesarios para usar este comando.')
    if(!args[0]) return message.channel.send('Escribe la cantidad de mensajes a borrar.')
    if(args[0] <= 0 || args[0] > 100) return message.channel.send('La cantidad debe ser mayor a 0 y menor o igual a 100.')
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send({embed: { color: client.config.color_rojo, author: { icon_url: message.guild.me.user.displayAvatarURL, name: 'Acabo de borrar ' + args[0] + ' mensajes.' }  }}).then(message => {
        message.delete(5000).catch()
      })
    })
} 