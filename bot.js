const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('wio.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token);

//---------------------------------KOMUTLAR---------------------------------\\

//////////////////////////////////////// REKLAM ENGEL \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//////////////////////////////////////// REKLAM ENGEL \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

////////////////////////////////////////// KANAL KORUMA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
      
    );
  });
  }
})
////////////////////////////////////////// KANAL KORUMA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/////////////////////////////////////////////// SA - AS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
client.on('message', async msg => {
  if (msg.author.bot) return;
  const i = await db.fetch(`saas_${msg.guild.id}`);
  if (!i) return;
   if (msg.content.toLowerCase() === 'selam') {
    if (msg.author.bot) return;  

        if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
            msg.reply('**Aleyküm Selam**'); 
        } else {
        msg.reply('**Aleyküm Selam Admin**');
        }      
    
    }

  if (msg.content.toLowerCase() === 'sa') {
    if (msg.author.bot) return;  

        if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
            msg.reply('**Aleyküm Selam**'); 
        } else {
        msg.reply('**Aleyküm Selam Admin**');
        }      

    }

  if (msg.content.toLowerCase() === 'sea') {
    if (msg.author.bot) return;  

        if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
            msg.reply('**Aleyküm Selam**'); 
        } else {
        msg.reply('**Aleyküm Selam Admin**');
        }      
    }


  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    if (msg.author.bot) return;  

        if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
            msg.reply('**Aleyküm Selam**'); 
        } else {
        msg.reply('**Aleyküm Selam Admin**');
        }      
    
    }
});
/////////////////////////////////////////////// SA - AS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



//-------------------- Capslock Engel Sistemi --------------------//
    client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Hey Dostum, Casplock Kapatırmısın Lütfen.`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});
//-------------------- Capslock Engel Sistemi --------------------//
//-----------------Etiket Prefix-----------------\\
client.on("message", msg => {
    //let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
    const rache = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("> **Selam**\n **Buyrun Benim  Bilgilerim;** \n\n **Adım:** `Remzy`\n **Prefixim:** `r!` \n **Yardım İçin:** `r!yardım` \n **Sunucuna Eklemek İçin:** `r!davet`")
  if (msg.content.includes(`<@${client.user.id}>`) || msg.content.includes(`<@!${client.user.id}>`)) {
    msg.channel.send(rache);
  }
});
//-----------------Etiket Prefix-----------------\\
//----------------------Otorol-------------------------\\
client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setDescription(`> **Sunucuya yeni katılan** ** <@${member.user.id}> ** **Kullanıcısına** <@&` +rol +`> **Rolü verildi.**`)
    .setColor("#00ff51"); 
  member.guild.channels.cache.get(kanal).send(embed);

});
//----------------------Otorol-------------------------\\

/////////////////////////////////////////// SAYAÇ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  if (member.guild.memberCount >= sayac) {
    member.guild.channels.cache
      .get(skanal)
      .send(
        `:inbox_tray: **${
          member.user.tag
        }** sunucuya **katıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` kişi olduk! :gzeltik: Sayaç sıfırlandı.`
);
   db.delete(`sayac_${member.guild.id}`);
    db.delete(`sayacK_${member.guild.id}`);
    return;
  } else {
    member.guild.channels.cache
      .get(skanal)
      .send(
        `:inbox_tray: **${
          member.user.tag
        }** Sunucuya **Katıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
          member.guild.memberCount}\` Üye Kaldı! Sunucumuz şuanda \`${
          member.guild.memberCount
        }\` Kişi!`
);
}
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  member.guild.channels.cache
    .get(skanal)
    .send(
      `:outbox_tray:  **${
        member.user.tag
      }** Sunucudan **Ayrıldı**! \`${db.fetch(
        `sayac_${member.guild.id}`
      )}\` Üye Olmamıza Son \`${db.fetch(`sayac_${member.guild.id}`) -
        member.guild.memberCount}\` Üye Kaldı! Sunucumuz şuanda \`${
        member.guild.memberCount
      }\` Kişi!`
);
});
/////////////////////////////////////////// SAYAÇ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


/////////////////////////////////////// KÜFÜR ENGEL \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/////////////////////////////////////// KÜFÜR ENGEL \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const rache = new Discord.MessageEmbed()
.setThumbnail()
.addField(`Remzy Bot`, `**Selamlar, Remzy Bot Sizin İçin Vardır**`)
.addField(`Remzy | Prefix`, `**Remzy Botun Prefixi =** \`r!\``)
.addField(`Remzy | Kullanımı ?`, `\r!yardım\` **Yazmanız Yeterlidir.**`)
.addField(`Remzy | Davet`, `\`r!davet\``)
.setFooter(`Remzy Türkçe Bot`)
.setTimestamp();


client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(rache)

});

client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === ozelkomutYazi) {
      let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});
///////////////////////////// ANTİ RAİD \\\\\\\\\\\\\\\\\\\\\\\\\\
client.on("guildMemberAdd", async member => {
let kanal = await db.fetch(`antiraidK_${member.guild.id}`)== "anti-raid-aç"
  if (!kanal) return;  
  var cod = member.guild.owner
  if (member.user.bot === true) {
     if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
    let are = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL)
      .setDescription(`**${member.user.tag}** (${member.id}) adlı bota bir yetkili izin verdi eğer kaldırmak istiyorsanız **${ayarlar.prefix}bot-izni kaldır botun_id**.`);
    cod.send(are);
     } else {
       let izinverilmemişbot = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL)
      .setDescription("**" + member.user.tag +"**" + " (" + member.id+ ") " + "adlı bot sunucuya eklendi ve banladım eğer izin vermek istiyorsanız **" + ayarlar.prefix + "bot-izni ver botun_id**")
       member.kick();// Eğer sunucudan atmak istiyorsanız ban kısmını kick yapın
       cod.send(izinverilmemişbot)
}
  }
});
///////////////////////////// ANTİ RAİD \\\\\\\\\\\\\\\\\\\\\\\\\\

////////////////////////////////// EKLENDIM ATILDIM DOSTUM \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
client.on('guildCreate', guild => {

let rache02 = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('797150417237966903').send(rache02);

});


client.on('guildDelete', guild => {

let rache01 = new Discord.MessageEmbed()

.setColor("RED")
.setTitle(" Bot Kicklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('797150417237966903').send(rache01);

});
////////////////////////////////// EKLENDIM ATILDIM DOSTUM \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
client.on('userUpdate', (oldUser, newUser) => {//
  if(oldUser.displayAvatarURL({dynamic: true}) !== newUser.displayAvatarURL({dynamic: true})) {
    client.guilds.cache.forEach(async guild => {
    if(guild.members.cache.get(newUser.id)) {
    const channeldata = await require('wio.db').fetch(`ppgif.${guild.id}`)
    if(!channeldata) return;
    let channel = await guild.channels.cache.get(channeldata)
  

     let gifkontrol = newUser.displayAvatarURL({dynamic: true}).includes('.gif') ? `[**[GIF]**](${newUser.displayAvatarURL({dynamic: true})})` : `~~**[GIF]**~~`
     
    const chimp2 = new Discord.MessageEmbed().setColor('GOLD').setImage(newUser.displayAvatarURL({dynamic: true})).setDescription(`${gifkontrol} **[PNG](${newUser.displayAvatarURL({dynamic: true}).replace('.gif', '.png').replace('.jpg', '.png').replace('.webp', '.png')})** **[JPG](${newUser.displayAvatarURL({dynamic: true}).replace('.png', '.jpg').replace('.gif', '.jpg').replace('.webp', '.jpg')})** **[WEBP](${newUser.displayAvatarURL({dynamic: true}).replace('.gif', '.webp').replace('.png', '.webp').replace('.jpg', '.webp')})**`)
   return channel.send(chimp2)
    }
    })
  }
  })
//-------------------- Afk Sistemi --------------------//
const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {

  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("GREEN")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`${message.author.username} Artık \`AFK\` Değilsin.`);

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("#ff0000")
      .setDescription(
        `**BU KULLANICI AFK**\n\n**Afk Olan Kullanıcı :** ${USER.tag}\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``
      );

    message.channel.send(afk);
  }
});
//-------------------- Afk Sistemi --------------------//
