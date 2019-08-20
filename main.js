const Discord = require('discord.js')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const colors = JSON.parse(fs.readFileSync('colors.json', 'utf8'))
const Embeds = require('./embed')

var client = new Discord.Client()


client.on('ready', async () => {
    console.log(`Logged in as ${client.user.username}...`) 
    client.user.setStatus('online')
})  



client.on('message', async (msg) => {
var cont    = msg.content,
    member  = msg.member,
    channel = msg.channel,
    guild   = msg.guild
      
    // Hilfe Command: !hilfe

      if(member != client.user.id && cont.startsWith(config.prefix + "hilfe")) {
          let embed1 = new Discord.RichEmbed()
          .setColor(colors.blau)
          .addField("!accept", `Damit du die Regel akzeptierst!`, true);
          msg.member.send(embed1)
          
      } if(member != client.user.id && cont.startsWith(config.prefix + "accept")) {
        member.addRole('609879956343881728')
          let embed2 = new Discord.RichEmbed()
          .setColor(colors.grün)
          .addField("Du hast die Regeln akzeptiert!", `Guten Tag, @${member.user.username} du hast das Regelwerk akzeptiert und hast somit Zugriff auf alle Text- und Sprachkanäle des **Mojacraft Communityservers**`);
          msg.member.send(embed2)
        }   
})

client.login(config.token)
