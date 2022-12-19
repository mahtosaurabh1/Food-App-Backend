const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/food-app').then(() => {
//     console.log("connected to database");
// })   //for mongodb compass

const pass = process.env.PASSWORD_KEY;
mongoose.connect(`mongodb+srv://saurabh:${pass}@cluster0.pbf2e5b.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("connected to database");
}).catch((err)=>{
    console.log("database error"+err);
})