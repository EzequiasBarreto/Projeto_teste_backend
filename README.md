## Descrição
Este projeto é uma API back-end criada com NestJS e Express, usando o TypeORM para a integração com um banco de dados SQL (MySQL). O sistema inclui um CRUD (Create, Read, Update, Delete) para gerenciar postagens e membros fictícios.


## Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.
NestJS: Framework para construir aplicações Node.js escaláveis e eficientes.
TypeORM: ORM (Object-Relational Mapping) para interagir com o banco de dados.
MySQL: Sistema de gerenciamento de banco de dados relacional.

## Configuração do Ambiente
Para configurar o ambiente, você precisará instalar as dependências necessárias. Abra
terminal e execute o comando abaixo:

    Fiz uma verificação se o Node.JS realmente estava instalado corretamente:
      node -v
      npm -v

    Configuração do projeto:
      npm install -g @nestjs/cli

    Criação do Novo Projeto NestJS:
      nest new meu-projeto-backend

    Instalação do Express, pois sera usado como uma camada HTTP subjacente:
      npm install @nestjs/platform-express

    Para fazer a conexão NestJS com o banco. foi instalado a dependencia TypeORM pelo Prompt de Comando. Isso instala o pacote mysql2, que é o driver MySQL necessário para o TypeORM se conectar ao banco MySQL:
  -  npm install @nestjs/typeorm typeorm mysql2

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
# testes unitários
npm run test

# testes e2e
npm run test:e2e

# cobertura de testes
npm run test:cov


## Recursos
Confira alguns recursos que podem ser úteis ao trabalhar com NestJS:

Visite a Documentação do NestJS
Para perguntas e suporte, visite nosso canal no Discord
Para se aprofundar e obter mais experiência prática, confira nossos cursos oficiais em vídeo
Visualize o gráfico da sua aplicação e interaja com a aplicação NestJS em tempo real usando as Ferramentas de Desenvolvimento do NestJS
Precisa de ajuda com seu projeto (meio período a período integral)? Confira nosso suporte corporativo oficial
Para ficar por dentro e receber atualizações, siga-nos no XLinkedIn
Está procurando um emprego ou tem uma vaga para oferecer? Confira nosso Quadro de Vagas oficial
Suporte
Nest é um projeto open source licenciado sob a MIT. Ele pode crescer graças aos patrocinadores e ao apoio dos incríveis colaboradores. Se você gostaria de se juntar a eles, por favor, leia mais aqui

# Licença
Nest é licenciado sob a MIT

