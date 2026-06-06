const http = require("http");
const express = require("express");

const app = express();

app.get("/",(req,res) => {
	res.send("Welcome");
})

app.get("/about",(req,res)=>{
	res.send("About me");
})

app.get("/user/:name",(req,res)=>{
	res.send(`Hello ${req.params.name}`);
})

app.get("/sum",(req,res)=>{
	let {a,b} = req.query;
	a = Number(a)
	b = Number(b);
	res.send(String(a+b));
})


app.get("/me",(req,res)=>{
	res.send("I am ankush.");
});

app.get("/search",(req,res)=>{
	const item = req.query.q;
	if(item){
		return res.send(`No results found for ${item}`);

	}
})

app.listen(3000,()=>{
	console.log("Server running...");
})
