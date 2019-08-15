const amqp = require("amqplib");
const {
  logger
} = require("./logger")

module.exports = async function () {
  const connection = await amqp.connect(process.env.rabbitmqURL);
  return new Promise((resolve, reject) => {
    connection.on('error', function (err) {
      logger.error(`RabbitMQ Error ${err}`);
      return reject(err)
    })
    connection.on('close', () => {
      logger.info(`RabbitMQ close connection`)
    })
    resolve(connection)
  })


}
