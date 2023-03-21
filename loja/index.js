import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
})

const producer = kafka.producer()

const pedido = {
    id: 3,
    cliente: 'Paula',
    produto: 'Coleira pro cachorro',
    preco: 500.0
}

const message = {
    key: ''+pedido.id,
    value: JSON.stringify(pedido)
};

console.log(message);

await producer.connect()
await producer.send({
  topic: 'pedidos',
  messages: [
    message
  ],
})

await producer.disconnect()