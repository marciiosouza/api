
# API · Node.js (resumido)

![node](https://img.shields.io/badge/node-%3E%3D18-brightgreen) ![license](https://img.shields.io/badge/license-ISC-blue)

API REST minimalista em Node.js puro. Roteamento simples, suporte a parâmetros e leitura de JSON.

---

Requisitos: Node.js 18+

Instalar e rodar:

```pwsh
npm install
npm run dev
```

Servidor: http://localhost:4000

---

Endpoints:

| Método | Rota |
|--------|------|
| GET    | /products |
| POST   | /products |
| DELETE | /products/:id |

---

Exemplo rápido (POST):

```bash
curl -X POST http://localhost:4000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Produto A","price":9.99}'
```

Resposta (201):

```json
{"name":"Produto A","price":9.99}
```

---

Projeto:

- `src/server.js`, `src/middlewares/*`, `src/routes/routes.js`, `src/utils/parseRoutePath.js`

---

Contribuições: PRs bem-vindos. Autor: Marcio Souza · ISC
