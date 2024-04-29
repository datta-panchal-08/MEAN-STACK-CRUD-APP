const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);


main().then(res => console.log("connection succesfull")).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/UsersDb');

}

app.get("/",(req,res)=>{
    res.send("Welcome User");
});


app.listen(port,()=>{
    console.log(`srver is started at port : ${port}`);
})

