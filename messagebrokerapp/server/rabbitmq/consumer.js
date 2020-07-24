const consumer = async (channel, queue) => {
  channel.consume(
    queue,
    (msg) => {
      console.log(`Mensagem recebida: ${msg.content.toString()}`);
    },
    { noAck: true }
  );
};

module.exports = consumer;
