import "dotenv/config";
import { Connection, Channel, connect } from "amqplib";

export class RabbitMqServer {
  private connection: Connection;
  private channel: Channel;

  async start() {
    const url = process.env.RABBITMQ_URL || "";

    this.connection = await connect(url);
    this.channel = await this.connection.createChannel();
  }

  async publishInQueue(queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async publishInExchange(exchange: string,queue: string, message: string) {
    return this.channel.publish(exchange, queue, Buffer.from(message));
  }
}
