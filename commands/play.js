exports.run = async (client, message, args, level, audioplayer) => {
	// Play streams using ytdl-core
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel || voiceChannel.type !== 'voice') {
		message.channel.send("Unable to leave your voice channel...");
		return;
	}
	
	voiceChannel.join()
		.then(connection => {
			//1const ytdl = require('ytdl-core');
			//const streamOptions = { seek: 0, volume: 1, passes: 1, bitrate: 48000 };
			//const stream = ytdl(args[0], { filter : 'audioonly' });
			//const dispatcher = connection.playStream(stream, streamOptions);
			console.log("Play: " + args[0]); 
			audioplayer.play(connection, args[0]);
		})
		.catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "Play",
  category: "Audio",
  description: "Play music in your voice channel.",
  usage: "!play <youtube-url>"
};
