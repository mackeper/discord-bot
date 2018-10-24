var auth = require('./auth.json');
const Discord = require("discord.js");
const AudioPlayer = require("./audioplayer/audioplayer");

const bot = new Discord.Client();
const audioplayer = new AudioPlayer(bot);
const prefix = "!";

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
	level = 0;
    commandFile.run(bot, message, args, level, audioplayer);
  } catch (err) {
    console.error(err);
  }
});

bot.login(auth.token);