# Aula de Persistência - Programação para Web

Este repositório contém o projeto desenvolvido para a aula de Programação para Web do curso de Análise e Desenvolvimento de Sistemas da UFCA. O objetivo desta aula é ensinar conceitos de persistência de dados utilizando MongoDB e Mongoose, integrados com o framework Express.

## Estrutura do Projeto

O projeto está organizado em camadas para facilitar a manutenção e a escalabilidade:

- **controllers/**: Contém os controladores que lidam com as requisições HTTP.
- **models/**: Define os esquemas de dados e interage diretamente com o MongoDB usando Mongoose.
- **routes/**: Define as rotas da API e as associa aos controladores correspondentes.
- **services/**: Contém a lógica de negócio e interage com os modelos para manipulação de dados.
- **app.js**: Arquivo principal da aplicação onde o Express é configurado, as rotas são integradas e a conexão com o MongoDB é estabelecida.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB e Node.js.

## Funcionalidades da API

A API gerencia o cadastro de usuários e a busca por usuários por e-mail.

### Pré-requisitos

- Node.js instalado.
- MongoDB instalado ou uma conta no MongoDB Atlas.

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/vilelaricardo/aula_persistencia.git
   cd aula_persistencia
    ```

2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure a conexão com o MongoDB no arquivo `app.js`:
  ```js
    mongoose.connect('mongodb+srv://<username>:<password>@<clusterName>.uyyor32.mongodb.net', {
        retryWrites: true,
        w: 'majority',
        appName: 'AulaWeb'
    });
  ```

