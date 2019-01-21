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

    robot.error(function (err, res) {

        robot.logger.error(err);
        //robot.logger.debug(err.stack);

        // if error was triggered by user, tell them
        if ((res !== undefined) && (res !== null)) {
            return res.reply("DOES NOT COMPUTE: " + err);
        }

    });

};
