
require('./.env');
require('./db');
const botgram = require('botgram'),
    BotGramModel = require('./db/schema'),
    findWord = require('./helper/findWord'),
    bot = botgram(process.env.TOKEN);

bot.command("start", (msg, reply, next) => {
    reply.text(`Olá ${msg.from.firstname}, favor informar a palavra chave!`);
});

bot.text((msg, reply, next) => {
    const { text } = msg;
    const returnWord = findWord(text);
    if (returnWord) {
        const BotGram = new BotGramModel();
        BotGram.chatId = msg.from.id;
        BotGram.wordMagic = text;
        BotGram.save();
        reply.text(`${returnWord.againstWord}`);
    };
});