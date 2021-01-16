const discord = require('discord.js')
const Discord = require('discord.js')

const db = require('wio.db')

exports.run = async(client, message, args) => {

    
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:remzybasarisiz:799626534993526795>  Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`));


if(args[0] === "sıfırla") {
const AceBots = new discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`<a:remzybasarili:799627754228023366> Kayıt Olunacak Kanal Başarıyla Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(AceBots)
db.delete(`kayıtkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const AceBot = new discord.MessageEmbed()
.setColor('RED')
.setDescription(`<a:remzybasarisiz:799626534993526795> Kayıt Olunacak Kanalı Belirtiniz !  `)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(AceBot)
}
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const Ace = new discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`<a:remzybasarili:799627754228023366> Kayıt Olunacak Kanal ${kanal} Olarak Ayarlandı ! `)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(Ace)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-kanal',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: '!kayıt-kanal #kanal'
}