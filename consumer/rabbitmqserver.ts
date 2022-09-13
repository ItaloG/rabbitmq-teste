import "dotenv/config";
import { Connection, Channel, connect, Message } from "amqplib";

export class RabbitMqServer {
  private connection: Connection;
  private channel: Channel;

  async start() {
    const url = process.env.RABBITMQ_URL || "";

    this.connection = await connect(url);
    this.channel = await this.connection.createChannel();
  }

  async consume(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (message: any | null) => {
      callback(message);
    });
  }
}
