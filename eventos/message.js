module.exports = (client, message) => { 
const Discord = require('discord.js'); 
  
  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); //Este es el RegExp que utilizaremos

if (message.content.match(RegMention)) {
  const a = new Discord.RichEmbed()
  .setTitle('Mi prefix es .')
  .addField('Como puedo saber que comandos tiene el bot?', 'Puedes usar .help y te mandara un mensaje privado con los comandos')
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter(`${message.author.username}`)
    message.channel.send(a)
}
  if(!message.content.startsWith(client.config.prefix)) return; 
  if(message.author.bot) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()
  
  let cmd = client.comandos.get(command); 
  if(!cmd) return message.delete(10000);
  
  
  
  cmd(client, message, args);
  
}
