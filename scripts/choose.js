// Description:
//   Randomly select between the given parameters. Minimum two parameters must be supplied, separated with commas
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot choose <Options> - Generates a random option from the list of options given separated with commas
//
// Author:
//   Matt Sudol

module.exports = function (robot) {
  
	return robot.respond(/choose (.*)/i, function (msg) {
		let opts = msg.match[1];
		let options = opts.split(",");
    
        if (options.length >= 2){
          let chosen = options[Math.floor(Math.random()*options.length)];
          return msg.reply(" asked to choose between "+msg.match[1]+". "+ process.env.HUBOT_NAME +" chose: "+chosen);
        }
        else {
          return msg.reply("The options ["+msg.match[1]+"] were not two or more, please indicate different options with commas");
        }

    });
  
};
