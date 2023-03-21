import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
})

const consumer = kafka.consumer({ groupId: 'notas-fiscais' })

await consumer.connect()
await consumer.subscribe({ topic: 'pedidos', fromBeginning: true })
await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const pedido = JSON.parse(message.value);
      console.log(pedido.cliente)
    },
  })