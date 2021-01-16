const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor("#3a00fe")
.setAuthor(`Yardım Menüsü | GELİŞTİRME AŞAMASINDA`)
.setDescription(`
:white_small_square:  \`${prefix}moderasyon\` \n **Moderasyon Komutlarını Gösterir.**\n
:white_small_square:  \`${prefix}kullanıcı\` \n **Kullanıcı Komutlarını Gösterir.**\n
:white_small_square:  \`${prefix}guard\` \n **Koruma Komutlarını Gösterir.**\n
:white_small_square:  \`${prefix}kayıt-yardım\` \n **Kayıt Komutlarını Gösterir.**\n
:white_small_square:  \`${prefix}jail-yardım - Yakında\` \n **Jail Komutlarını Gösterir.**\n
:white_small_square:  \`${prefix}eğlence - Yakında\` \n **Eğlence Komutlarını Gösterir.**\n
:white_small_square:  \`${prefix}hatabildir\` \n **Hata İlr Karşılaşırsanız Bildirmeyi Unutmayınız!**\n
[**Bot Davet**](https://discord.com/api/oauth2/authorize?client_id=796007401903489084&permissions=8&scope=bot)
[**Bota Oy Ver**](https://top.gg/bot/796007401903489084/vote)
`)
//.addField(``,``,true)

.setTimestamp()
//.setImage("https://cdn.discordapp.com/attachments/720582739941916683/780714816120815636/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi!`)
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: 1,
  guildOnly: 1, 
  aliases: ['help','y','komutlar'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Yardım Menüsü.',
  usage: 'yardım'
};