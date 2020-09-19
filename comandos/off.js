module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
  if(!args[0])
  {
    let embed = new Discord.RichEmbed()
    .setColor(client.config.color_rojo)
    .setTitle('Uso de los comandos de Neo Bot')
    .setThumbnail(message.guild.me.user.displayAvatarURL)
    .setFooter('Para ver los demas comandos usa .help 2')
    .addField("Mis comandos son : ",'`8ball` **.8ball Pregunta**\n\
    `amor` **.amor @usuario1 @usuario2** \n\
    `avatar` **.avatar @usuario**\n\
    `ban` **.ban @usuario Razon**\n\
    `md` **.md @usuario Texto**\n\
    `fish` **.fish**\n\
    `kick` **.kick @usuario**\n\
    `ping` **.ping**\n\
    `purge` **.purge Numero de mensajes**\n\
    `say` **.say Texto** \n `trump` **.trump Texto**\n\
    `unban` **.unban ID del usuario** \n\
    `mute` **.mute @usuario** \n\
    `unmute` **.unmute @usuario o su ID**\n\
    `hi`  **.hi @usuario**\n')
    message.author.send(embed)
    message.channel.send(new Discord.RichEmbed().setAuthor('Ayuda enviada al privado', message.guild.me.user.displayAvatarURL).setColor(client.config.color_rojo).setDescription('Para mas ayuda usa `.helpall 2`'))
}
  if(args[0] === '2') 
  {    
    var embed2 = new Discord.RichEmbed()
    embed2.setColor(client.config.color_rojo)
    embed2.setTitle('Comandos de Neo Bot')
    embed2.setThumbnail(message.guild.me.user.displayAvatarURL)
    embed2.setFooter('Disfruta del bot, para mas ayuda Swiftx#7734')
    embed2.addField("Segunda página - Comandos: ",'\
    `kill`  **.kill @usuario** \n\
    `kiss`  **.kiss @usuario** \n\
    `pat`  **.pat @usuario** \n\
    `slap` ** .slap @usuario** \n\
    `rps` **.rps "piedra" "papel" o "tijera"** \n\
    `quest` **.quest Pregunta** \n\
    `klk` **.klk @usuario** \n\
    `azar` **.azar** \n\
    `contagiar` **.contagiar @usuario** \n\
    `covid` **.covid** \n\
    `hug` **.hug @usuario** \n\
    `infoserver` **.infoserver** \n\
    `lock` **.lock** \n\
    `unlock` **.unlock** \n\
    `random` **.random** \n\
    `warn` **.warn @usuario** \n\
    `translate` **.translate [el idioma al que quieres traducir] [mensaje]** \n\
    `infouser` **.infouser @usuario** \n\
    `banid` **.banid "ID del usuario"** \n\
    `tempmute` **.tempmute @usuario [Tiempo]**')
    message.author.send(embed2)  
    message.channel.send(new Discord.RichEmbed().setAuthor('Ayuda enviada al privado', message.guild.me.user.displayAvatarURL).setColor(client.config.color_rojo).setDescription('Para mas ayuda usa `.helpall 3`'))
}
  if(args[0] === '3') 
  {    
    var embed3 = new Discord.RichEmbed()
    embed3.setColor(client.config.color_rojo)
    embed3.setTitle('Comandos de Neo Bot')
    embed3.setThumbnail(message.guild.me.user.displayAvatarURL)
    embed3.setFooter('Disfruta del bot, para mas ayuda Swiftx#7734')
    embed3.addField("Tercera página - Comandos: ",'\
    `hack`  **.hack @usuario** \n\
    `calculadora` **.calculadora 5+5**')
        message.author.send(embed3)  
    message.channel.send(new Discord.RichEmbed().setAuthor('Ayuda enviada al privado', message.guild.me.user.displayAvatarURL).setColor(client.config.color_rojo))
}}