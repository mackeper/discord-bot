const fs = require('fs');
const ytdl = require('ytdl-core');

class AudioPlayer {
	constructor(bot) {
		this.bot = bot;
		this.dispatcher;
		this.streamOptions = { seek: 0, volume: 1, passes: 1, bitrate: 48000 };
	}
	
	play(connection, url) {
		console.log("play");
		this.dispatcher = connection.playStream(ytdl(url, {filter: 'audioonly'}));
		console.log("Should be playing...");
	}
	
	/*this.dispatcher.on('end', () => {
		// The song has finished
		console.log("Song ended.")
	});*/

	/*dispatcher.on('error', e => {
	  // Catch any errors that may arise
	  console.log(e);
	});*/
	
	volume(value) {
		console.log("volume");
		try {
			this.dispatcher.setVolume(parseInt(value)/100);
		} catch(error) {
			console.error(error);
		}
	}

	//console.log(dispatcher.time); // The time in milliseconds that the stream dispatcher has been playing for

	pause() {
		console.log("pause");
		this.dispatcher.pause(); // Pause the stream
	}
	
	resume() {
		console.log("resume");
		this.dispatcher.resume(); // Carry on playing
	}
	
	//dispatcher.end(); // End the dispatcher, emits 'end' event
}

module.exports = AudioPlayer;
