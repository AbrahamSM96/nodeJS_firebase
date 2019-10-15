const fs = require('fs');
const http = require('http');
const colors = require('colors');
const app = require('./app');

async function main() {
app.listen(app.get('port'));
console.log('server on port ', app.get('port'));
}

main();








// const handleServer = function (req, res) {
//     res.writeHead(200,{'Content-type': 'text/html'});
//    res.write('<h1> Hola mundo desde nodejs </h1>');
//    res.end(); 
// };

// const server = http.createServer(handleServer);

// server.listen(3000, function(){
//     console.log('Server on port 3000'.green);
    
// })
// fs.writeFile('texto.txt', 'linea uno', function(err){
//     if(err){
//         console.log(err);
        
//     }
//     console.log('Archivo creado');
    
// });

// console.log('ultima linea de codigo');

// //
// query('SELECT * FROM users', function(err, users){
//     if(err){
//         console.log(err)
//     }
//     if(users){

//     }
// })

// fs.readFile('./texto.txt', function (err, data) {
//     if(err){
//         console.log(err);
//     }
    
//     console.log(data.toString()); // si solo es data te da un buffer y lo tenemos que convertir a un string con toString
// });