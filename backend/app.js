const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { createUser, findUser } = require('./db.js')

app.use(cors());

app.use(bodyParser.json());



app.post('/', signUpHandle ,async (req, res) =>{
    const data = req.body;
    const responce = await createUser(data.name, data.email, data.pass);
    console.log(responce.rowCount);

    if(responce.rowCount){
        console.log('sent true');
        res.send({res: true})
    }
    else{
        res.send({res: false})
        console.log('error');
    }
})

app.post('/login', loginHandle ,async (req, res) =>{
    const data = req.body;
    const responce = await  findUser(data.email, data.pass);
    console.log(responce);

    if(responce){
        console.log('sent true');
        res.send({res: true})
    }
    else{
        res.send({res: false})
        console.log('error');
    }
})

 function signUpHandle(req, res, next){
    const data = req.body;
    if(data.name && data.email && data.pass){
        next();
    }
    else{
        res.send({res: false})
    }
}

 function loginHandle(req, res, next){
    const data = req.body;
    if(data.email && data.pass){
        next();
    }
    else{
        res.send({res: false})
    }
}



app.listen(3000, () => console.log('server started'));