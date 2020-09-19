module.exports = async(client, message, args) => { 
var Weez = require ("weez") ;

var weez = new Weez.WeezAPI ("aX2nTQn0JhVGWgutKN3DI3DdGjQIeHtjeKdo"); 
if(!args[0]) return message.reply('Ingresa un mensaje para usar el comando.') 
  let img = await weez.trump(args.join(" "));
  message.channel.send({files: [img]})  
}