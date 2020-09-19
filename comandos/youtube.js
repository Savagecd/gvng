module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
const YouTube = require('youtube-node');
let youTube = new YouTube();

youTube.setKey('AIzaSyAdFs6aK3eAaNWSJiPgc61J7UFoKh8cRak'); 

let nombreyt = args.join(" ") //Definimos: nombreyt
if(!nombreyt) return  message.channel.send('Debe proporcionar algo para buscar'); //Si no tiene un nombre de vídeo en yt, retornar.

message.channel.send(':arrows_counterclockwise: Buscando..!') 
.then(m => {
    youTube.search(args.join(' '), 2, function(err, result){
        if(err){
            return console.log(err); 

        }
        if(result.items[0]["id"].videoId == undefined){
            return message.channel.send('¡No se han encontrado resultados!'); //Si el vídeo no existe, retornar

        } else{
            let link = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
            m.edit(link); //Editar el mensaje ''Búscando'' por el link del vídeo

        }
    })
})
}
