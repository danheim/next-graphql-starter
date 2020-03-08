
up:
	docker-compose up $(s)

down:
	docker-compose down $(s)

rm:
	docker-compose rm -fsv $(s)

build:
	docker-compose build $(s)

server:
	TAG=$(TAG) ENV=$(ENV) docker exec -it samp-ucp_server_1 bash

rebuild: rm build up
