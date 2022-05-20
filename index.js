const {Telegraf}= require("telegraf")
require("dotenv").config()

const Token = process.env.TOKEN

const bot = new Telegraf(Token)
console.log("bot is running")
bot.start((ctx) => ctx.reply('Welcome to Big Mouth'))
bot.help((ctx) => ctx.reply(`Big Mouth

  Converts blog posts to mp3 audio :D

  Usage:
  node index --args

  Examples:
  node index -u=https://some-site/blog-post -o=pathToFile.mp3

  node index --url=https://some-site/blog-post --output=pathToFile.mp3


Options

  -u, --url string      required, Website url of blog post, example (https://some-site/blog-post)
  -o, --output string   required, the path of the output file, example (./output.mp3)
  -h, --help            Print this usage guide.`))

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