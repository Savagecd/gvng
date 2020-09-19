module.exports = async (client, message, args) => { 
   const Discord = require('discord.js');
    message.channel.send
    const embed = new Discord.RichEmbed() 
    .setTitle('🔱 Torneo para rango Supreme 🔱')
    .addField('Dia :', 'Miercoles 15/04')
    .addField('Hora :', '🇵🇪 🇨🇴 🇪🇨 : 17:00 \n\
🇻🇪 🇩🇴 🇵🇾 : 18:00 \n\
🇦🇷 🇨🇱 🇧🇷 : 19:00')
    .setColor('RANDOM')
    .addField('Modo de juego :', '**Cuartos de final** : 1v1 el primero que llegue a 5 \n\
**Semi Final** : Box el primero que llegue a 7 \n\
**Final** : 1v1 el primero que llegue a 7 y box el primero que llegue a 10 ')
    .addField('Reglas :', 'No cheats  \n\
Solo construccion de nivel 1 \n\
Solo color rojo o azul las construcciones \n\
Solo Pump y Awp \n\
Solo se pueda usar la silla como trampa \n\
Maximo se le esperara 5 minutos para que te conectes ')
    .addField('Que pasa si no cumples una de las reglas?', 'La primera regla que incumplas se te advertira , pero a la segunda regla que incumplas seras descalificado')
      message.channel.send(embed)     
}