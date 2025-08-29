compose=docker compose

devcompose=$(compose) -f ./backend/docker/dev/compose.yaml

dev-up:
	$(devcompose) up -d

dev-fresh-up:
	$(devcompose) build --no-cache
	$(devcompose) up -d

dev-stop:
	$(devcompose) stop ramaskin-postgresql

dev-shell:
	$(devcompose) exec ramaskin-postgresql ash