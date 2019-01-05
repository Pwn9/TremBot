// Description:
//   Returns a message when the robot receives an error.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   None
//
// Author:
//   msudol

module.exports = function (robot) {
	
	robot.error(function(err, res) {
		
    robot.logger.error("Unhandled Error");
		robot.logger.error(err);
		
		if (res !== null) {
			return res.reply("DOES NOT COMPUTE: " + err);
		}
		
	});
	
};
