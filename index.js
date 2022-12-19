let express=require('express')
let cors=require('cors')
let dotenv = require("dotenv")
dotenv.config({})
const app=express();
const router = require('./Routes/routes');

require('./db/config')

app.use(cors())
app.use(express.json())

app.use('/',router);


app.listen(5000,()=>{
    console.log("running");
})