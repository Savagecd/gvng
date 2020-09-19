
module.exports = async (client, message, args) => {
const Discord = require('discord.js');
  let categorias = []
  let pagina = 1
  
  let pagina1 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription("¡Bienvenido a la página 1 de mis comandos mas detallados!")
  .setFooter("Página 1/3 ")
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
.addField(':computer: | Enlaces','[Servidor de Discord](https://discord.gg/gRGpPCG)')
  
  let pagina2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription("¡Bienvenido a la página 2 de los comandos mas detallados!")
  .setFooter(`Página 2/3`)
  .addField("Segunda página - Comandos: ",'\
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
.addField(':computer: | Enlaces','[Servidor de Discord](https://discord.gg/gRGpPCG)');
  
  let pagina3 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription("¡Bienvenido a la página 3 de los comandos mas detallados!")
  .setFooter(`Página 3/3`)
  .addField("Tercera página - Comandos: ",'\
    `hack`  **.hack @usuario** \n\
    `calculadora` **.calculadora 5+5** \n\
`votar` **.votar Aca el mensaje ** \n\
`chiste` **.chiste** \n\
`img` **.img Lo que quieres buscar** \n\
`poll` **.poll Pregunta - Opción 1 - Opción 2 - Opción 3** \n\
`invite` **.invite** \n\
`infobot` **.infobot** \n\
`embed` **.embed Titulo | Descripcion | Footer** \n\
`setanuncio` **.setanuncio test** \n\
`cry` **.cry** \n\
`google` **.google Youtube** \n\
`jump` **.jump** \n\
`mover` **.mover**')
.addField(':computer: | Enlaces','[Servidor de Discord](https://discord.gg/gRGpPCG)');

const paginas = [
  pagina1,
  pagina2,
  pagina3
] 
  message.channel.send(new Discord.RichEmbed().setAuthor('Ayuda enviada al privado', message.author.displayAvatarURL).setColor(client.config.color_rojo))
let msg = await message.author.send(pagina1)


await msg.react("⏪") 
await msg.react("◀️") 
await msg.react("❌") 
await msg.react("▶️") 
await msg.react("⏩") 
  
const atrasF = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
const proximoF = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;
const inicioF = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
const finF = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
const eliminarF = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  
const atras = msg.createReactionCollector(atrasF, {time: 1250000});
const proximo = msg.createReactionCollector(proximoF, {time: 120000});
const inicio = msg.createReactionCollector(inicioF, {time: 120000});
const fin = msg.createReactionCollector(finF, {time: 120000});
const eliminar = msg.createReactionCollector(eliminarF, {time: 120000});
  
atras.on("collect", async function(r) {
if(pagina === 1) return await r.remove(message.author);
  pagina--;
  await msg.edit(paginas[pagina-1])
  await r.remove(message.author)
}) 
  
proximo.on("collect", async function(r) {
if(pagina === paginas.length) return await r.remove(message.author);
  pagina++;
  await msg.edit(paginas[pagina-1])
  await r.remove(message.author)
}) 
  
inicio.on("collect", async function(r) {
  pagina = 1;
  await msg.edit(pagina1)
  await r.remove(message.author)
}) 

fin.on("collect", async function(r) {
  pagina = categorias.length;
  await msg.edit(pagina3)
  await r.remove(message.author)
}) 
  
eliminar.on("collect", async function(r) {
  await msg.delete().catch()
}) 
  
}