const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Article = require("./models/artical"); // Assurez-vous que le chemin vers votre modèle est correct

mongoose.connect("mongodb://localhost:27017/mesfirst") // Remplacez "mydatabase" par le nom de votre base de données
    .then(() => {
        console.log("Connexion à MongoDB réussie");
    })
    .catch((error) => {
        console.log("Erreur de connexion à MongoDB :", error);
    });
    
 
app.use(express.json());
app.post("/articales",async(req,res)=>{
    const newArticale=new articale();
    const artile=req.body.name;
    const arbody=req.body.sqd;
    newArticale.title=artile;
    newArticale.age=arbody;
    newArticale.body="basem";
    await newArticale.save();



    res.json({newArticale});
});
app.get("/articlees", async (req, res) => {
    const article= new articale;
    try {
        const article = await Article.find();
        console.log("Les articles sont :", article);
        res.json(article);
    } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
        res.status(500).send("Erreur lors de la récupération des articles");
    }
});

app.get("/articles/:articleId", async (req, res) => {
    const id = req.params.articleId;
    try {
        const article = await articale.findById(articleId);
        if (!article) {
            return res.status(404).send("Article non trouvé");
        }
        res.json(article);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'article :", error);
        res.status(500).send("Erreur lors de la récupération de l'article");
    }
});
app.delete("/artcles/:articleId",async(req,res)=>{
    const id = req.params.articleId;
 try{
    const article = await articale.findByIdAndDelete(id);
    res.json(articale);
    return;
    }catch(error){
        console.log("error vvcxvcx",id);
        return res.json(error);
    }

});
app.get("/showart", async (req, res) => {
    
        const articles = await Article.find(); // Utilisez le modèle "Article" au lieu de "article"
        res.render("articles.ejs", {
            allarticles: articles,
        });
    
    
});



//mongodb+srv://bassembensaad731:<password>@myfirst.efjdeas.mongodb.net/?retryWrites=true&w=majority&appName=myfirst

app.get("/hello",(req,res)=>{
    res.send("hello");
    //res.sendFile(__dirname +  'C:\Users\LENOVO\Desktop\nodes js\views\number.html');

});
app.get("/numbers", (req, res) => {
    let numbers = "";
    for (let i = 0; i <= 100; i++) {
      numbers += i + "-";
    }
    //res.send(`the numbers are : ${numbers}`);
    //res.sendFile(__dirname+"/views/numbers.html");
    res.render("numbers.ejs",{
        namee: "bassem",
        numbers: numbers,
    });
  });
  app.get("/sayhello", (req, res) => {
   // console.log(req.body)
    //console.log(req.query)
    
    // res.send(` hello  ${req.body.name}, age is ${req.query.age}`);
    res.json({
        name : req.body.name,
        age : req.query.age
    })
  });

app.delete("/test",(req,res)=>{
    res.send("testing delete");

});

 
    


 

app.listen(3000,()=>{
console.log("iamcvxcnvbnb");


});