const {Telegraf}= require("telegraf")
require("dotenv").config()

const Token = process.env.TOKEN

const bot = new Telegraf(Token)
console.log("bot is running")
bot.on('text', (ctx) => {
  // Explicit usage
  ctx.telegram.sendMessage(ctx.message.chat.id, `Hi`)
  
  // Using context shortcut
//   ctx.reply(`Hello`)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))