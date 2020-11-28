const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'
//const url = 'mongodb+srv://Nitin:Test123@cluster0.zndg7.mongodb.net/test'
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, function(){
console.log('Server Started')

})

// con.on('open', function(){
//     console.log('connected...')
// })

//  var http = require('http')

// http.createServer(function(req, res){
// res.writeHead(200, {'Content-Type' : 'text/html'})
//     res.write("Welcome Nitin Negi!!")
//     res.end()

// }).listen(8080)

// console.log("Hello World!")