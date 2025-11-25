//VAMOS A CREAR UN CLIENTE SERVIDOR PARA UN CRUD
//PARA ESTO TENEMOS QUE PROBAR SI EL MODULO DE MYSQL ESTA VERIFICADO, SI NO, USAREMOS MYSQL2

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'estudiantescecyt'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    } else {
        console.log('Connected to the MySQL database.');
    }
});

//HAY QUE CONFIGURAR EL MIDDLEWARE, EL CUAL ESTAREMOS USANDO RUTAS Y CODIFICACION POR JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//HAY QUE CONFIGURAR LAS VISTAS QUE SE VAN A EJECUTAR
app.set('view engine', 'ejs');

//DONDE SE ENCUENTRAN LOS DIRECTORIOS DE DICHAS VISTAS
app.set('views', __dirname + '/views');

//PARA LA CRAGA DE IMAGENES, CSS, MULTIMEDIA, ETC. ES NECESARIO CONFIGURAR LA CARPETA PUBLIC
//ASI TODOS LOS RECURSOS DEL PROYECTO SE PODRAN CONSUMIR

app.use(express.static(__dirname + '/css'));

//RUTAS

app.post('/estudiante', (req, res) => {
    const { nombre, apellido, edad } = req.body; 
    })

    app.get('/', (req, res) => {
        const query = 'SELECT * FROM estudiantes';
        bd.query(query, (err, results) => {
            if (err) {
                return res.status(500).send('Error retrieving students from database.');
            }
                res.render('index', { estudiantes: resultados });
            
          })

          app.post('/estudiante', (req, res) => {
            const { nombre, edad, curso } = req.body; 
            const query = `INSERT INTO estudiantes (nombre, apellido, edad) VALUES ('${nombre}','${edad}' ,'${curso}' ?)``;
            bd.query(query, (err, results) => {
                if (err) {
                    return res.status(500).send('Error adding student to database.');
                }

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})