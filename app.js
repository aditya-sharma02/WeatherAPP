const express = require("express")
const app = express()
const path = require('path')
const hbs = require('hbs')

//------------------ paths ----------------
const vpath = path.join(__dirname,"templates/views")
const rppath = path.join(__dirname,"templates/partials")
const spath = path.join(__dirname,"../public")
//-------------------partials -------------------
hbs.registerPartials(rppath)
app.use(express.static(spath))

//------------------   routing ------------ 
app.set("view engine","hbs")
app.set("views",vpath) 
app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/weather',(req,res)=>{
    res.render("weather")
})
app.get('*',(req,res)=>{
    res.render("error")
})
app.listen(3000,()=>{
    console.log("responding at port 3k")
})