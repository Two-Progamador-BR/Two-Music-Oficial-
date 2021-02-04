const dbd = require("dbd.js")

const bot = new dbd.Bot({
  token:process.env.TOKEN,
  prefix: "t!"
})

const app = require("express")();app.get('/', (req, res) =>{res.send("Estou funcionando");});app.listen(8080);

// Callbacks

bot.onMessage()

bot.status({
  text: "Use t!help para saber meus comandos",
  type: "STREAMING",
  time: 5
})

bot.status({
  text: "Use t!play para ouvir uma musica",
  type: "STREAMING",
  time: 5
})

// Handler

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code
})
}
}
