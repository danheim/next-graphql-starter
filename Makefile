up:
	docker-compose up

down:
	docker-compose down

rm:
	docker-compose rm -fsv

build:
	docker-compose build

rebuild: rm build up