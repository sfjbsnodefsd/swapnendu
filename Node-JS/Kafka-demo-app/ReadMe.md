to start the docker image of kafka 
 docker-compose up

to create a topic 

run the command 
docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \ --create \ --bootstrap-server localhost:9092 \ replication-factor 1 \ --partitions 1 \ --topic test

 to install node-rdkafka which helps us to interact with kafka server
 npm i node-rdkafka --save