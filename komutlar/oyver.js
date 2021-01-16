const Discord = require('discord.js');
exports.run = async (client , message, args ) => {
const candycode = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`[**Bota Oy Vermek İçin Tıkla**](https://top.gg/bot/796007401903489084/vote)`)
message.channel.send(candycode)
};
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['oy-ver','botoy','oyver','oy ver','oy','oyla','veroy'],
permLevel: 0
}
exports.help = {
name: 'oyver'
};