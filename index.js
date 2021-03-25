const TeleBot = require('telebot');
const bot = new TeleBot("1739845906:AAHm72IATwLhVGVU21huWX3YPqqBMEmuEzo");

bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();
