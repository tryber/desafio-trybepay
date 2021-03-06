# Repositório de desafio extra para estudantes da Turma 8 (Infinito <3)

## Refactoring API - Refatoração de uma  uma API para fazer com que ela passe a usar o Sequelize para realizar as operações de I/O.

Este repositório armazena os códigos e scripts para o desafio proposto para a Turma 8.

## Começando

Basta clonar o repositório

```sh
git clone http://github.com/tryber/desafio-trybepay.git
```

Em seguida acessar a pasta do repositório e criar a própria branch

Exemplo:
```sh
cd desafio-trybepay
git checkout -b nome-desafio-trybepay
```

---

### Estrutura

Todo conteudo para realizar o desafio estará no seu respectivo Pull Request!

---


### Desafio

Este repositório armazena os códigos de uma API cujo o acesso ao banco de dados é feito via DAO e as queries são escritas diretamente no código.

Seu desafio é realizar:

1 - Um refactoring nessa API de forma que ela passe a se comunicar com o banco de dados através do Sequelize para todo o CRUD.

2 - Aplicar o princípio da inversão de dependência do SOLID para a conexão com o banco de dados.

### Detalhes

Para acessar o CRUD do seu endopoint, acesse via Postman ose seguintes endereços:

Listar pagamentos: GET - `http://localhost:3001/pagamentos`

Criar pagamento: POST - `http://localhost:3001/pagamentos`

```javascript
{
	"forma_de_pagamento":"trybepay",
	"valor":"300",
	"moeda":"US$",
	"descricao":"compra realizada"
}
```

Confirma pagamento: PUT - `http://localhost:3001/pagamentos/<id_do_pagamento>`

Cancela pagamento: DELETE - `http://localhost:3001/pagamentos/<id_do_pagamento>`

Acesse o arquivo `paytrybe.sql` e rode em seu banco de dados MySQL o script para criar as tabelas.

Acesse o arquivo `connectionFactory.js` e altere os dados para realizar a conexão com seu banco de dados MySQL. 

Bom desafio!
