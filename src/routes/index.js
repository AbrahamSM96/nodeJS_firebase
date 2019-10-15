const admin = require('firebase-admin');


admin.initializeApp({ // inicializamos firebase
    credential: admin.credential.applicationDefault(), //auntenticacion por defecto
    databaseURL: 'https://node-firebase-example-db872.firebaseio.com/' // en donde esta nuestra base de datos
});

const db = admin.database();  //conectarse a la base de datos

const {Router} = require('express');
const router = Router();

router.get('/', (req, res) =>{
    db.ref('contacts').once('value', (snapshot)=>{ // consula una vez la coleccion de contactos
        data = snapshot.val(); //snapshot son los valores y los guardamos en data
        res.render('index', {contacts: data}); //renderizo la pagina para que me los muestre
    })    
});

router.post('/new-contact', (req,res) =>{
    console.log(req.body);
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone:req.body.phone
    };
    db.ref('contacts').push(newContact); //es el nombre de la tabla de la DB
    res.redirect('/');
});

router.get('/delete-contact/:id', (req, res) => {
    db.ref('contacts/' + req.params.id).remove();
    res.redirect('/');
});


module.exports = router;
