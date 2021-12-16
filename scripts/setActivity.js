// Description:
//   Example scripts that interacts with hubot-discobot adapter and discord.js via robot.client
//
// Dependencies:
//   hubot-discobot
//
// Configuration:
//   HUBOT_DISCORD_ACTIVITY - Status message to set for current activity
//   HUBOT_DISCORD_ACTIVITY_TYPE - One of PLAYING,STREAMING,LISTENING,WATCHING,COMPETING
//   HUBOT_DISCORD_PASSWORD - Set a password to only allow users who know it to make changes
//
// Commands:
//   hubot setGame <password> <activityType> <activity> - Sets the discord activity
//
// Author:
//   msudol

//Settings
var passcode = process.env.HUBOT_DISCORD_PASSWORD;
var activities = ["PLAYING","STREAMING","LISTENING","WATCHING","COMPETING"];

module.exports = function(robot) {
    
    // add a helper function to clean up input strings
    String.prototype.unquoted = function (){return this.replace (/(^")|("$)/g, '')};
    
    // when something is done repeatedly, make a function out of it
    var parseCmd = function(msg) {
		var opts = msg.match[1];
        var options = opts.match(/(?=\S)[^"\s]*(?:"[^\\"]*(?:\\[\s\S][^\\"]*)*"[^"\s]*)*/g);
        
        for (var i = 0; i < options.length; i++) {
            if (typeof options[i] === 'string') {
                // string leading quotes from a string if there are any
                options[i] = options[i].unquoted();
            }
        }
        
        return options;
    };
    
    // respond to setGame command
    robot.respond(/setGame (.*)/i, function(msg) {
		var reply;
        
        var options = parseCmd(msg);
        var pwd = options[0];
        var activityType = options[1];
        var value = options.slice(2).join(" ");
        
        // check for command usage format
	    if (options.length >= 3) {
            // check password
            if (pwd === passcode) {
                // check activityType 
                if (activities.includes(activityType)) {
                    // set the currently playing game
                    robot.client.user.setActivity(value, {type: activityType})
                        .then((presence) => {robot.logger.debug("Activity set to " + activityType + " " + value)})
                        .catch((error) => {robot.logger.error(error)});  
                } else {
                    return msg.reply("Bad activity type, use one of " + activities.toString());
                }
           
            }
            else {
                return msg.reply("Invalid password: " + pwd + " - usage: setGame [password] [activity type] [activity value]");
            }  
	    }
	    else {
            return msg.reply("Bad command format, use: setGame [password] [activity type] [activity value]");
	    }
    }); 
    
};
