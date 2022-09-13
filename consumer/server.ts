import { Message } from "amqplib";
import { RabbitMqServer } from "./rabbitmqserver";

(async () => {
  const rabbitMQServer = new RabbitMqServer();
  await rabbitMQServer.start();

  await rabbitMQServer.consume("teste", (message: Message) => {
    console.log( message.content.toString() );
  });
})();
