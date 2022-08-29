const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const app1 = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app1.use('/static',express.static('static')); // Serving static files
app1.use(express.urlencoded())

// PUG SPECIFIC STUFF
app1.set('view engine','pug'); // Set the template engine as pug
app1.set('views',path.join(__dirname,'views')); // Set the views directory

//END-POINTS
app1.get('/',(req,res)=>{
    let con = 'This is the best PUG tempelate on the internet';
    const param = {'title':'Fit me GYM','content':con}
    res.status(200).render('index.pug',param)
})

app1.post('/',(req, res)=>{
let name = req.body.name;
let age = req.body.age;
let sex = req.body.sex;
let number = req.body.mobile;
let form = req.body.more;
    console.log(name);
    console.log(age);
    console.log(number);
    console.log(form); 
    let details = `Customer name: ${name},\nAge: ${age},\nGender: ${sex},\nMobile: ${number},\nReason to join: ${form}`;
    fs.writeFileSync('customer_detail.txt' , details );
    const param = {'message':'We will contact contact you soon'}
    res.status(200).render('index',param)
})

// HIT THE SERVER
app1.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})













// app.use('/static', express.static('static')); // Serving static files


// app.set('view engine','pug'); // Set the template engine as pug


// app.set('views',path.join(__dirname,'views')); // Set the views directory

// // Our pug demo endpoint
// app.get("/test", (req, res)=>{
//     res.status(200).render('test', { title: 'Hey', message: 'Hello there! you are in test.pug file' })
// })
// app.get("/demo", (req, res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there! you are in demo.pug file' })
// })


// app.get("/", (req, res)=>{
//     res.send("This is HomePage of my first express app")
// })
// app.get("/about", (req, res)=>{
//     res.send("This is About of my first express app")
// })
// app.post("/contact", (req, res)=>{
//     res.send("This is Contact of my first express app")
// })
// app.post("/service",(req, res)=>{
//     res.status(404).send("This page is under maintenance")
// })
// app.listen(port,()=>{
//     console.log(`Server started in port ${port}`);
// });