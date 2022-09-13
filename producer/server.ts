import { RabbitMqServer } from "./rabbitmqserver";

(async () => {
  const rabbitMQServer = new RabbitMqServer();
  await rabbitMQServer.start();

  const foienviado = await rabbitMQServer.publish("teste", "como vai??");
  console.log(foienviado);
})();
