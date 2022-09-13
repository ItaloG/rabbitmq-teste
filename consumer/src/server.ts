import { Message } from "amqplib";
import { RabbitMqServer } from "./rabbitmqserver";

(async () => {
  const rabbitMQServer = new RabbitMqServer();
  await rabbitMQServer.start();

  // await rabbitMQServer.consume("queue1", (message: Message) => {
  //   console.log( message );
  // });
  await rabbitMQServer.consume("ex.queue", (message: Message) => {
    console.log( message.content.toString() );
  });
})();
