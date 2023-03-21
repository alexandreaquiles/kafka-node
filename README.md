```sh
docker exec -it desktop-kafka-1 kafka-topics.sh --create --topic pedidos --partitions 2  --bootstrap-server localhost:9092
```

```sh
docker exec -it desktop-kafka-1 kafka-console-consumer.sh  --bootstrap-server localhost:9092 --topic pedidos --from-beginning
```

