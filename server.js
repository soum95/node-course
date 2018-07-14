const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
var app=express();

hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine','hbs');


app.use((req,res,next)=>{
	var now=new Date().toString();
	var log=`${now}: ${req.method}  ${req.url}`;
console.log(log);
fs.appendFile('server.log',log+ '\n');
next();
});
app.use((req,res,next)=>{
	res.render('maitenance.hbs');
});
app.use(express.static(__dirname +"/public/help.html"));

hbs.registerHelper('getCurrentYear',()=>{
return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
return  text.toUpperCase();
});
app.get('/',(req,res)=>
{
//res.send('<h1>hello express</h1>');
res.render('home.hbs',{
	pageTitle: 'soumaya',
	
	likes: 'ghoul'
});
});
app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:'about page',
		
	      likes :'ghoul'
	});

});
app.get('/bad',(req,res)=>{
	res.send({
		errorMessage:'unable'
		});
});
app.listen(3000);

