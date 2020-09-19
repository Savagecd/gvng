
module.exports = async (client, message, args) => {
const Discord = require("discord.js")

const encuesta = args.join(" ").split(" - ");
const [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6] = encuesta;

if(!opcion3) return message.channel.send("El comando debe tener una pregunta y dos opciones");

if(opcion3 && !opcion4) {

let encuesta = new Discord.RichEmbed()
.setColor(0x99bbff)
.setDescription("🇦 "+opcion2+"\n🇧 "+opcion3)


message.channel.send(opcion1, encuesta).then(m => {
m.react("🇦").then(() => {
m.react("🇧")
})
})
    
}

if(opcion4 && !opcion5) {
    
let encuesta = new Discord.RichEmbed()
.setColor(0x99bbff)
.setDescription("🇦 "+opcion2+"\n🇧 "+opcion3+"\n🇨 "+opcion4)
    
message.channel.send(opcion1, encuesta).then(m => {
m.react("🇦").then(() => {
m.react("🇧").then(() => {
m.react("🇨")
})
})
})
    
}
  
if(opcion5 && !opcion6) {
    
let encuesta = new Discord.RichEmbed()
.setColor(0x99bbff)
.setDescription("🇦 "+opcion2+"\n🇧 "+opcion3+"\n🇨 "+opcion4+"\n🇩 "+opcion5)
    
message.channel.send(opcion1, encuesta).then(m => {
m.react("🇦").then(() => {
m.react("🇧").then(() => {
m.react("🇨").then(() => {
m.react("🇩")
})
})
})
})
    
}
  
if(opcion6) {
    
let encuesta = new Discord.RichEmbed()
.setColor(0x99bbff)
.setDescription("🇦 "+opcion2+"\n🇧 "+opcion3+"\n🇨 "+opcion4+"\n🇩 "+opcion5+"\n🇪 "+opcion6)
    
message.channel.send(opcion1, encuesta).then(m => {
m.react("🇦").then(() => {
m.react("🇧").then(() => {
m.react("🇨").then(() => {
m.react("🇩").then(() => {
m.react("🇪")
})
})
})
})
})
    
}
}