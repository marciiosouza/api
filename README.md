# 🚀 API · Node.js (sem frameworks)

Este é um projeto exemplo de uma API REST minimalista, construída com Node.js puro. Ideal para aprender os fundamentos: roteamento, parâmetros em rotas e leitura de body JSON.

---

### 📁 Principais arquivos

- `src/server.js` — Entrada da aplicação. Cria o servidor HTTP e aplica middlewares.
- `src/middlewares/jsonBodyHandler.js` — Lê o body (JSON) e popula `request.body`.
- `src/middlewares/routeHandler.js` — Faz o roteamento e chama os controllers.
- `src/routes/routes.js` — Define rotas (método, path e controller).
- `src/utils/parseRoutePath.js` — Converte paths com `:params` em RegExp.

Requisitos

- Node.js (recomendado >= 18.x) — o script `npm run dev` usa `node --watch`.

Instalação

1. Clone o repositório

2. Instale dependências (o projeto usa apenas Node.js puro, mas é boa prática ter o passo):

```pwsh
npm install
```

Como executar

Inicie o servidor em modo de desenvolvimento:

```pwsh

# API · Node.js (sem frameworks)

![node](https://img.shields.io/badge/node-%3E%3D18-brightgreen) ![license](https://img.shields.io/badge/license-ISC-blue) ![status](https://img.shields.io/badge/status-experimental-yellow)

Uma API REST minimalista escrita em Node.js puro para demonstrar roteamento, parsing de parâmetros em rotas e leitura de body JSON.

---

## Sumário

- [Destaques](#destaques)
- [Como rodar](#como-rodar)
- [Endpoints](#endpoints)
- [Exemplos de uso](#exemplos-de-uso)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como adicionar rotas](#como-adicionar-rotas)
- [Observações técnicas](#observa%C3%A7%C3%B5es-t%C3%A9cnicas)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Autor e licença](#autor-e-licença)

---

## ✨ Destaques

- Sem dependências externas — ideal para estudo.
- Roteamento com suporte a parâmetros (ex: `/products/:id`).
- Middlewares simples e fáceis de entender.

## ▶️ Como rodar

Requisitos: `Node.js 18+`

Passos rápidos:

```pwsh
# instalar dependências (se houver)
npm install

# rodar em modo dev
npm run dev
```

Abra: http://localhost:4000

---

## 🛣️ Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | /products | Retorna uma lista (texto) — exemplo: "Lista de Produtos!" |
| POST   | /products | Cria/recebe um produto via JSON no body — retorna o JSON recebido (201) |
| DELETE | /products/:id | Remove um produto pelo `id` (retorna texto confirmando) |

---

## 🧪 Exemplos de uso & respostas

### GET /products

```bash
curl -i http://localhost:4000/products
```

Resposta (exemplo):

```http
HTTP/1.1 200 OK
Content-Type: application/json

Lista de Produtos!
```

---

### POST /products

```bash
curl -i -X POST http://localhost:4000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Produto A","price":9.99}'
```

Resposta (exemplo):

```json
{
  "name": "Produto A",
  "price": 9.99
}
```

---

### DELETE /products/:id

```bash
curl -i -X DELETE http://localhost:4000/products/123
```

Resposta (exemplo):

```http
HTTP/1.1 200 OK
Content-Type: application/json

Produto removido com o ID: 123
```

---

## 🗂️ Estrutura do projeto

- `src/server.js` — inicializa o servidor e aplica middlewares.
- `src/middlewares/jsonBodyHandler.js` — consome a stream e define `request.body`.
- `src/middlewares/routeHandler.js` — faz o lookup das rotas e executa controllers.
- `src/routes/routes.js` — definição das rotas (método, path e controller).
- `src/utils/parseRoutePath.js` — converte paths com `:params` em RegExp com grupos nomeados.

---

## ➕ Como adicionar rotas

1. Abra `src/routes/routes.js`.
2. Adicione um objeto na lista `routes` com a forma:

```js
{
  method: 'GET' | 'POST' | 'DELETE' | ... ,
  path: '/exemplo/:id',
  controller: (request, response) => { /* ... */ }
}
```

Os paths serão convertidos automaticamente para RegExp e os parâmetros ficarão disponíveis em `request.params`.

---

## 🧠 Observações técnicas

- `jsonBodyHandler` tenta parsear o body como JSON; se falhar, `request.body = null`.
- `parseRoutePath` transforma `:param` em grupos nomeados de RegExp — ex: `/products/:id` → `/products/(?<id>[a-z0-9-_]+)`.
- `routeHandler` faz match pelo `method` e pela RegExp e injeta `request.params` antes de chamar o controller.

---


---

## 🤝 Contribuição

Contribuições são bem-vindas! Para mudanças pequenas, abra um PR. Para alterações maiores (ex.: integração com banco, auth), abra uma issue primeiro.

---

## ✍️ Autor e licença

Marcio Souza · ISC
