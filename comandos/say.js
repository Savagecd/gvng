module.exports = (client, message, args) => { 
    let texto = args.join(' ');
  let permisos = message.channel.permissionsFor(message.member);
    if(!texto) return message.channel.send('Debe escribir un mensaje.')
    message.channel.send(texto); 
  disableMentions: permisos.has("MENTION_EVERYONE") ? "none" : "everyone"
    message.delete()
  
  }
  