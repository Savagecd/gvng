module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');

if(!args) return message.channel.send('Agrege una pregunta para la encuesta.')

const embed = new Discord.RichEmbed()
      .setAuthor('Pregunta:')
      .setDescription('**'+args.join(' ')+'**\n▔▔▔▔▔▔▔▔▔▔▔')
      .addField('Opcion 1', '✅ Si')
      .addField('Opcion 2', '❌ No')
      .setColor(0xff4d4d)
      .setTimestamp()

message.channel.send(embed)
.then(message => {
        message.react('✅').then(reaction => {
        reaction.message.react('❌') })

});
}