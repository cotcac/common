// utility function to publish messages to a channel
// Method direct.
const {logger} = require("./logger");
module.exports = function (channel, { exchangeName,routingKey, data }) {
    return new Promise((resolve, reject) => {
        channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(data), 'utf-8'), { persistent: true }, function (err) {
            if (err) {
                logger.error(err);
                return reject(err);
            }
            logger.info("channel publish")
            resolve();
        })
    });
}
