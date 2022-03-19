//Sequelize
const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://localhost/dealers_choice_full_stack")
const { STRING } = Sequelize
const faker = require("faker")


const Entrant = sequelize.define('entrant', {
    name: {
        type: STRING,
         allowNull: false,
        notEmpty: true
    },
    
    gamerTag: {
        type: STRING,
         allowNull: false,
        notEmpty: true
    }
})


//Express
const express = require('express');
const app = express();
const path = require('path');
app.use(express.json())
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));


app.get("/api/entrants", async(req,res,next) => {
    try {
        res.send(await Entrant.findAll())
    } catch(err) {
        next(err)
    }
})

//faker is probably off here.
app.post("/api/entrants", async(req,res,next)=> {
    try {
         res.send(await Entrant.create(req.body))
    } catch(err) {
        next(err)
    }
})




const syncAndSeed = async() => {
    await sequelize.sync({force: true}) 
    
    const Entrants = await Promise.all([
        await Entrant.create({name: "Gary Smith", gamerTag: "NoOrdinaryGary"}),
        await Entrant.create({name: "Steven R", gamerTag: "SpecialLink"}),
        await Entrant.create({name: "Josh J", gamerTag: "Jersh"}),
        await Entrant.create({name: "Gavin W", gamerTag: "GavWheat"}),
        await Entrant.create({name: "Matt K", gamerTag: "Krade"}),
        await Entrant.create({name: "Chris R", gamerTag: "Strawhat"})
    ])
    
    const port = process.env.PORT || 8080;

    app.listen(port, ()=> console.log(`listening on port ${port}`));
    
}

syncAndSeed()












