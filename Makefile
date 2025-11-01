.PHONY: help build up down restart clean

##@ Основные команды

help: ## Показать справку
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Собрать образы
	docker-compose build

up: ## Запустить контейнеры
	docker-compose up -d

down: ## Остановить контейнеры
	docker-compose down

restart: ## Перезапустить контейнеры
	docker-compose restart

start: build up ## Собрать и запустить

stop: down ## Остановить (alias)

ps: ## Показать статус
	docker-compose ps

##@ База данных

shell-db: ## Подключиться к PostgreSQL
	docker exec -it postgres_db psql -U postgres -d auth_db

backup: ## Создать бэкап БД
	docker exec postgres_db pg_dump -U postgres auth_db > backup.sql

restore: ## Восстановить из backup.sql
	docker exec -i postgres_db psql -U postgres auth_db < backup.sql

##@ Очистка

clean: ## Удалить контейнеры и volumes
	docker-compose down -v

rebuild: clean build up ## Полная пересборка