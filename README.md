## Descrição
Este projeto é uma API back-end criada com NestJS e Express, usando o TypeORM para a integração com um banco de dados SQL (MySQL). O sistema inclui um CRUD (Create, Read, Update, Delete) para gerenciar postagens e membros fictícios. 
Duas rotas foram criadas: /membro e /postagens, para acessar informações de dados. Foi aplicado o conceito de repository, service e controllers para estruturar o código.


## Tecnologias Utilizadas
- Node.js: Ambiente de execução JavaScript.
- NestJS: Framework para construir aplicações Node.js escaláveis e eficientes.
- TypeORM: ORM (Object-Relational Mapping) para interagir com o banco de dados.
- MySQL: Sistema de gerenciamento de banco de dados relacional.

## Configuração do Ambiente
Para configurar o ambiente, você precisará instalar as dependências necessárias. Abra
terminal e execute o comando abaixo:

    Fiz uma verificação se o Node.JS realmente estava instalado corretamente:
      node -v
      npm -v

    Configuração do projeto:
      npm install -g @nestjs/cli  

      npm i

  -  Realizado a configuração do Banco de Dados:
      Fora criado um banco de dados MySQL chamado "projeto_teste" com dados fictício e que foi assim configurado as credencias no arquivo app.madule.ts 

## Compilar e executar o projeto
Usando o Terminal dentro do VsCode, inserir esse comandos 

  # desenvolvimento
  Use o comando abaixo para iniciar o projeto NestJS:
  - npm run start:dev

  # acessar a API
  http://localhost:3000



## Executar testes
- npm run test

## Recursos

Usei o VsCode para realizar a produção, insonnia para melhor visualizar o teste de rotas e o MySQL para criar e formar um banco de dados. 

# Licença
Nest é licenciado sob a MIT

