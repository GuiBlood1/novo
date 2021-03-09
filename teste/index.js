const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url == '/'){
        res.end('<h1>Home</h1>')
    }
    res.end('<h1>Servidor não encontrado</h1>')
})


server.listen(3000,'localhost',()=>{
    console.log('servidor de pé')
})