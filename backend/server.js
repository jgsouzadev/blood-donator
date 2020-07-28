// configurando o servidor
const express = require('express');
const server = express();
const port = 3000;

//  configurar o servidor para apresentar arquivoss extras (estaticos)

server.use(express.static('../public'))
server.use(express.urlencoded({extended: true}))

// Banco de dados

const Pool = require('pg').Pool
const db = new Pool({
   user: 'postgres',
   password: 'root',
   host: 'localhost',
   port: 5432,
   database: 'Bdonation' 
})


// configurando template engine

const nunjucks = require('nunjucks')
nunjucks.configure("../frontend/", {
    express: server,
    noCache: true,
})


// Lista de doadores: vetor ou array




// configurar apresentação da pagina
server.get("/", function(req, res){
    // res = resposta do servidor
    // req = requisição 
    db.query("SELECT * FROM donors", function(err, result) {
         if(err) return res.render("index_static.html")
        
        let donors = result.rows 
    return res.render("index.html", { donors })

    })

});


// pegando dados do formulario
server.post("/", function(req, res) {
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood
         
    // Verificação se os dados estão nullos
        if (name == "" || email == "" || blood == "") {
            return res.send("Todos os campos são obrigatorios")
        }  
    // adicionar valores no banco
          const queryBD = `
        INSERT INTO donors ("name", "email", "blood")
        VALUES ($1, $2, $3)`

        const values = [name, email, blood]

        db.query(queryBD, values, function(err) {
// fluxo de erro
            if (err) return res.send("Configure o banco de dados.")
// fluxo ideal
            return res.redirect("/")
        })
});



// ligar o servidor e permitir o acesso na porta 3000
server.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`)
});


