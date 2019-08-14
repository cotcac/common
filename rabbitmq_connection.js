var amqp = require("amqplib");
const  {logger} = require("./logger")
module.exports = async function(){
    let connection = await amqp.connect(process.env.rabbitmqURL);
    connection.on('error', function(err){
        logger.error("RabbitMQ Error",err)
    })
    connection.on('close',() =>{
        logger.info(`RabbitMQ close connection`)
    })
    return connection
    
}