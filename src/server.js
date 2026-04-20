import http from 'node:http'

// - HTTP
//  - Método HTTP
//  - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

const server = http.createServer((req, res) => {
  const { method, url } = req
  
  if (method === 'GET' && url === '/users') {
    return res.end('Hello World')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Hello World')
  }
})

server.listen(3333)