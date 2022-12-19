let express=require('express')
let cors=require('cors')
let dotenv = require("dotenv")
dotenv.config({})
const app=express();
const router = require('./Routes/routes');

require('./db/config')

const port = process.env.PORT ||5000

app.use(cors())
app.use(express.json())

app.use('/',router);


app.listen(port,()=>{
    console.log("running");
})