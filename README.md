# Nginx Reverse Proxy com Node.js e MySQL

Este projeto demonstra o uso do Nginx como um proxy reverso em frente a uma aplicação Node.js que interage com um banco de dados MySQL. Ele permite que os usuários acessem a aplicação Node.js através do Nginx, que encaminha as solicitações para o servidor Node.js. O servidor Node.js, por sua vez, interage com o banco de dados MySQL.

## Pré-requisitos

Antes de executar este projeto, certifique-se de ter os seguintes pré-requisitos instalados:

- Docker
- Docker Compose

## Começando

Para executar o projeto, siga estas etapas:

1. Clone o repositório:

   ```shell
   git clone https://github.com/ermessonlima/challenge-nginx-docker-fullcycle.git


2. Navegue até o diretório do projeto:

   ```shell
   cd challenge-nginx-docker-fullcycle

3. Construa e inicie os contêineres usando o Docker Compose:
   ```shell
   docker-compose up -d

4. Assim que os contêineres estiverem em execução, acesse a aplicação em seu navegador em:
   ```shell
      http://localhost:8080

  Estrutura do Projeto
  A estrutura do projeto é a seguinte:
   ```shell
   
      ├── nginx
      │   ├── Dockerfile
      │   └── default.conf
      ├── node
      │   ├── .gitignore
      │   ├── Dockerfile
      │   ├── index.js
      │   ├── package.json
      │   └── yarn.lock
      └── docker-compose.yml





