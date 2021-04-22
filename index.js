const Discord = require('discord.js')
const path = require('path')

const client = new Discord.Client()

require('dotenv').config()

const token = process.env.TOKEN

const amogus_image = path.resolve(__dirname, 'images', 'amogus2.png')
const sus_image = path.resolve(__dirname, 'images', 'sus.png')
const jerma_image = path.resolve(__dirname, 'images', 'jerma.jpg')
const drip_image = path.resolve(__dirname, 'images', 'drip.jpg')
const impasta_image = path.resolve(__dirname, 'images', 'impasta.jpg')

const amogus_attachment = new Discord.MessageAttachment(amogus_image)
const sus_attachment = new Discord.MessageAttachment(sus_image)
const jerma_attachment = new Discord.MessageAttachment(jerma_image)
const drip_attachment = new Discord.MessageAttachment(drip_image)
const impasta_attachment = new Discord.MessageAttachment(impasta_image)

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
  if(message.content === "!info") {

    const embed_info_message = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle("Amogus Bot")
    .setDescription("Amogus Bot created with ❤️ by Marechal Dev. \n Check out my GitHub!")
    .setURL('https://github.com/marechal-dev/amogus_bot')
    .setThumbnail("http://amogus.space/hdmus.png")
    .setFooter('Amogus Bot', "http://amogus.space/hdmus.png")

    return message.channel.send(embed_info_message)
  }
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
  let trigger_word = "drip"
  let capitalized_entire_word = trigger_word.toUpperCase()
  let capitalized_firstLetter_word = trigger_word.charAt(0).toUpperCase()+trigger_word.slice(1)

  if(message.author.bot) return

  if(message.content.includes(trigger_word) || message.content.includes(capitalized_entire_word) || message.content.includes(capitalized_firstLetter_word)) {
    message.channel.send(drip_attachment)
  }
})

client.on('message', async message => {
  let trigger_word = "impasta"
  let capitalized_entire_word = trigger_word.toUpperCase()
  let capitalized_firstLetter_word = trigger_word.charAt(0).toUpperCase()+trigger_word.slice(1)

  if(message.author.bot) return

  if(message.content.includes(trigger_word) || message.content.includes(capitalized_entire_word) || message.content.includes(capitalized_firstLetter_word)) {
    message.channel.send(impasta_attachment)
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
  let trigger_whatever_is_this = "ඞ"

  if(message.author.bot) return

  if(message.content.includes(trigger_whatever_is_this)) {
    message.channel.send("https://www.youtube.com/watch?v=vTIIMJ9tUc8")
  }
})

client.on('message', async message => {
  let trigger_messages = ["!amogus", "!aurora", "!message", "!liminal", "!solace"]

  const audio_paths_array = [
    path.resolve(__dirname, 'sounds', 'amogusEarrape.mp3'),
    path.resolve(__dirname, 'sounds', 'auroraWoods.mp3'),
    path.resolve(__dirname, 'sounds', 'finalMessage.mp3'),
    path.resolve(__dirname, 'sounds', 'liminalIncident.mp3'),
    path.resolve(__dirname, 'sounds', 'longNightSolace.mp3')
  ]

  if(message.author.bot) return

  for(let i = 0; i < trigger_messages.length; i++) {
    if(message.content === trigger_messages[i]) {
      const voice_channel = message.member.voice.channel
      
      if(!voice_channel) {
        return message.channel.send('Você precisa estar em um canal de voz para usar os comandos.')
      }else {
        const connection = await voice_channel.join()
        const dispatcher = connection.play(audio_paths_array[i])

        dispatcher.on('start', () => {
          dispatcher.resume()
        })

        dispatcher.on('finish', () => {
          voice_channel.leave()
          dispatcher.destroy()
        })

        dispatcher.on('error', console.error)
      }
    }
  }
})

client.login(token)
