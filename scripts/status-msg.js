// Description:
//   Sets a status message for Hubot on Discord
//
// Dependencies:
//   None
//
// Configuration:
//   HUBOT_DISCORD_STATUS_MSG     - Status message to set for "currently playing game"
//
// Commands:
//   None
//
// Author:
//   Matt Sudol

//Settings

var currentlyPlaying = process.env.HUBOT_DISCORD_STATUS_MSG || '';

module.exports = function(robot) {
   
 //return robot.user.setStatus('online', currentlyPlaying).then(robot.logger.debug("Status set to " + currentlyPlaying))["catch"](robot.logger.error);
   
};