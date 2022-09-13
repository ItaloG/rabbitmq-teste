import { RabbitMqServer } from "./rabbitmqserver";

(async () => {
  const rabbitMQServer = new RabbitMqServer();
  await rabbitMQServer.start();

  const loop = +process.argv[2];
  for (let index = 0; index < loop; index++)
    // await rabbitMQServer.publishInQueue("queue1", "teste file");
    await rabbitMQServer.publishInExchange('mailer.email.direct', 'ex.email', 'teste file')
})();


