const producer = require("amqplib/callback_api");
const consumer = require("./consumer");

var queue = "I'm a queue";
var msg = "Esta é uma mensagem";

broker = () =>
  producer.connect("", (err, conn) => {
    if (err) {
      console.log(err);
      return;
    }

    conn.createChannel(async (err, channel) => {
      if (err) {
        console.log(err);
        return;
      }

      channel.assertQueue(queue, {
        durable: false,
      });

      channel.sendToQueue(queue, Buffer.from(msg));

      consumer(channel, queue);
    });
  });

module.exports = broker;
