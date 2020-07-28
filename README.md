# blood-donator

Projeto simples desenvolvido com HTML, CSS, Javascript e SQL (Postgres).
Para poder executar a aplicação com 100% de funcionamento é necessario fazer alguns passos antes.

<!-- const db = new Pool({
   user: 'postgres',
   password: 'root',
   host: 'localhost',
   port: 5432,
   database: 'Bdonation' 
}) -->

No bloco de código acima localizado em `backend/server.js` na linha `14`  está a configuração do banco de dados Postgres na minha maquina

1 - Para o funcionamento, será necessario passar os paramétros do seu banco de dados PostGres e em seguida
criar o banco de dados 'Bdonation' 

2 - Após o passo acima crie a tabela `donors`

Com os parametros
`name email blood`

Todos varchar 255

3 - Após o passo anterior, so restará alterar as configurações de login, senha e porta (caso você queira utilizar uma diferente) `backend/server.js` na linha `14`.

E o projeto estará disponível com back-end e front-end para uso.