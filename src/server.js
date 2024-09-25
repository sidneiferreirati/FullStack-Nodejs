import http from 'node:http'

const server = http.createServer((request,response)=>{
   const {method,url} = request

    
    return response.end(`Metodo: ${method} \nURl: ${url}`)
})

server.listen(3333)