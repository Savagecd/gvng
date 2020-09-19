module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
  if(!args[0])
  {
    let embed = new Discord.RichEmbed()
    .setColor(client.config.color_rojo)
    .setTitle('**__Mis Comandos🔨__**')
    .setThumbnail(message.guild.me.user.displayAvatarURL)
    .setFooter('Escribe .helpall para ayuda detallada | Creador por Gvng#0707')
    .addField("🔰 | Comandos Admin",'`ban` `banid` `kick` `lock` `mute` `purge` `tempmute` `unban` `unlock` `unmute` `warn` `setanuncio` `mover`')
    .addField("🎉 | Comandos Divertidos",'`8ball` `amor` `gif` `hack` `klk` `rps` `say` `trump` `chiste` `img` `dick`')
    .addField("⚙️ | Comandos Interaccion",'`azar` `contagiar` `hi` `hug` `kill` `kiss` `md` `pat` `quest` `random` `slap` `embed` `cry` `bored` `google` `jump`')
    .addField("🌐 | Comandos Utiles",'`avatar` `covid` `help` `helpall` `infoserver` `infouser` `translate` `tryout` `verificar` `youtube` `neo` `calculadora` `ping` `votar` `poll` `feed` `infobot` `invite`')
    .addField(':computer: | Enlaces','[Servidor de Discord](https://discord.gg/ubvQnR2)')
    .setImage(`https://images-ext-2.discordapp.net/external/ZKKQkZgedITTk55A21ZjKKILHhxQLxusVwN4qPiC3Pk/https/i.pinimg.com/originals/87/03/7a/87037a25323fa92244d0d455fa70c9b7.jpg`)
    message.author.send(embed)
    message.channel.send(new Discord.RichEmbed().setAuthor('Ayuda enviada al privado', message.author.displayAvatarURL).setColor(client.config.color_rojo))
    }
}
