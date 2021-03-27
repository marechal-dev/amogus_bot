const Discord = require('discord.js')
const path = require('path')

const client = new Discord.Client()

const invite = "https://discord.com/oauth2/authorize?client_id=825060678150258758&scope=bot&permissions=3394624"
const token = "ODI1MDYwNjc4MTUwMjU4NzU4.YF4bog.oNP-J0m6jWNzEfiZAZZTxQ-w1eQ"

const amogus_image = path.resolve(__dirname, 'images', 'amogus2.png')
const sus_image = path.resolve(__dirname, 'images', 'sus.png')
const jerma_image = path.resolve(__dirname, 'images', 'jerma.jpg')

const amogus_attachment = new Discord.MessageAttachment(amogus_image)
const sus_attachment = new Discord.MessageAttachment(sus_image)
const jerma_attachment = new Discord.MessageAttachment(jerma_image)


client.on('ready', () => {
  console.log("Amogus Bot is online")
  client.user.setPresence({
    status: 'online',
    activity: {
      name: "Amogus",
      type: 'STREAMING',
      url: 'https://www.youtube.com/watch?v=ZOmCr1Xd-Fc'
    }
  })
})

client.on('disconnect', () => {
  console.log("Amogus Bot is offline")
})

client.on('guildCreate', guild => {
  let channeltoSend
  
  guild.channels.cache.forEach((channel) => {
    if (channel.type === "text" && !channeltoSend && channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      channeltoSend = channel
    }
  })

  if (!channeltoSend) return

  channeltoSend.send(amogus_attachment)
})

client.on('message', async message => {
  const message_triggers = ["amogus", "amongas", "amongus"]

  for (let i = 0; i < message_triggers.length; i++) {
    let actual_word = message_triggers[i]
    let capitalized_entire_actualWord = message_triggers[i].toUpperCase()
    let capitalized_firstLetter_actualWord = message_triggers[i].charAt(0).toUpperCase()+message_triggers[i].slice(1)

    if (message.content.includes(actual_word) || message.content.includes(capitalized_entire_actualWord) || message.content.includes(capitalized_firstLetter_actualWord)) {
      message.channel.send(amogus_attachment)
    }
  }
})

client.on('message', async message => {
  let trigger_word = "sus"
  let capitalized_entire_word = trigger_word.toUpperCase()
  let capitalized_firstLetter_word = trigger_word.charAt(0).toUpperCase()+trigger_word.slice(1)

  if(message.author.bot) return

  if(message.content.includes(trigger_word) || message.content.includes(capitalized_entire_word) || message.content.includes(capitalized_firstLetter_word)) {
    message.channel.send(sus_attachment)
  }
})

client.on('message', async message => {
  let trigger_word = "imposter"
  let capitalized_entire_word = trigger_word.toUpperCase()
  let capitalized_firstLetter_word = trigger_word.charAt(0).toUpperCase()+trigger_word.slice(1)

  if(message.author.bot) return

  if(message.content.includes(trigger_word) || message.content.includes(capitalized_entire_word) || message.content.includes(capitalized_firstLetter_word)) {
    message.channel.send(jerma_attachment)
  }
})

client.on('message', async message => {
  let trigger_word = "😳"

  if(message.author.bot) return

  if(message.content.includes(trigger_word)) {
    message.channel.send("sus 😳")
  }
})

client.on('message', async message => {
  let command = "%jamil"
  let jamil_putao = "299288740118003723"
  
  if(message.author.bot) return

  if(message.content.includes(command)) {
    message.channel.send(`<@${jamil_putao}> putão kkkkk`)
  }
})

client.login(token)
