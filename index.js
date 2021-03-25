const TeleBot = require('telebot');
const bot = new TeleBot({
    token: "1739845906:AAHm72IATwLhVGVU21huWX3YPqqBMEmuEzo",
    polling: { // Optional. Use polling.
    interval: 1000, // Optional. How often check updates (in ms).
    timeout: 0, // Optional. Update polling timeout (0 - short polling).
    // limit: 100, // Optional. Limits the number of updates to be retrieved.
    retryTimeout: 5000, // Optional. Reconnecting timeout (in ms).
    // proxy: 'http://username:password@yourproxy.com:8080' // Optional. An HTTP proxy to be used.
    allowedUpdates: [],
    },
});


bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();
