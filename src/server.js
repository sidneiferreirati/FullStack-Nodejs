import http from 'node:http'

const server = http.createServer((request,response)=>{
   const {method,url} = request

    
    return response.writeHead(404).end(`Metodo: ${method} \nURl: ${url}`)
})

server.listen(3333)