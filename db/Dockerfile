# Postgres con el esquema del libro de visitas ya incluido.
FROM postgres:16-alpine

RUN apk upgrade --no-cache

COPY init/ /docker-entrypoint-initdb.d/
