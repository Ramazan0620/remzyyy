const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`Kullanıcı Yardım Menüsü | GELİŞTİRME AŞAMASINDA`)
.setDescription(`
:white_small_square:  \`${prefix}avatar\` \n **Avatarınızı Atar.**\n
:white_small_square:  \`${prefix}profil\` \n **Profil Bilgileriniz Atar..**\n
:white_small_square:  \`${prefix}oylama\` \n **Oylama Yaparsınız.**\n
:white_small_square:  \`${prefix}sa-as aç/kapat\` \n **Birisi Selam Verdiğinde Botda Selam Verir.**\n
[**Bot Davet**](https://discord.com/api/oauth2/authorize?client_id=796007401903489084&permissions=8&scope=bot)
[**Bota Oy Ver**](https://top.gg/bot/796007401903489084/vote)
`)
//.addField(``,``,true)

.setTimestamp()
.setFooter(`${message.author.username} Tarafından İstendi! | Kullanıcı İD - ${message.author.id}`)
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['kullanıcı-help','kullanıcı','kullanıcı-yardım'], 
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: 'Yardım Menüsü.',
  usage: 'kullanıcı'
};