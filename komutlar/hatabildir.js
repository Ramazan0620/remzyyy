const Discord = require('discord.js')
const db = require('wio.db');

exports.run = async (client, message, args) => {
  

let Ottoman = args.slice(0).join(' ')

  
const Ottoman1 = new Discord.MessageEmbed()
 .setTimestamp()

if (!Ottoman) return message.reply('**Lütfen Hatayı Belirtiniz ve Troll Amaçlı Kullanmayınız**')
  
  message.reply('**Hatayı Geliştiricilerime Bildirdim! Hatayı Bildirdiğin İçin Teşekkür Ederiz**')
  const Ottoman2 = new Discord.MessageEmbed()
  .setTitle('Hata Var!')
  .setTimestamp()
  .setColor("RED")
  .setFooter('Hata Sistemi')
  .addField('Hatayı Bulan  Kişi', `<@${message.author.id}>`,true)
  .addField('Hata', Ottoman,true)
  client.channels.cache.get('797449244248113182').send(Ottoman2)
  
}
exports.conf = {
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "hata"
}