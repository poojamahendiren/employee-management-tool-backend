require("dotenv").config();                                                     //6 //7 to establish db connection connect.js
const express = require("express");                                           //1
const cors = require("cors")
const db = require("./db/connect");                                           //10 import db
const { mongoose } = require('mongoose');

const employeeRoutes=require("./routes/employees.routes");                    //23 employeeroutes

const app = express();                                                         //2

//(DB connection)  
db();                                                                         //11 call db
// mongoose.connect("mongodb+srv://pooja:pooja123@nova-employees.m0mgthn.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology: true}  )
// .then(
//   (res) =>  {
//     console.log(`Database is Connected`)
//   },
//   err => { console.log(`Not Connected`) }
// );

app.get('/', (req, res) => {
    res.send('Welcome to my MyOrg!');
})

//middleware to convert incoming data into jason format
app.use(express.json());                                                    //12 middleware   //13 routes

//12.1 yet to update cors 
app.use(cors());
//routes
app.use('/api',employeeRoutes);                                                     //24 employeeroutes  (/api-label to diff)

const PORT = process.env.PORT || 4000;                                             //3


app.listen(PORT,()=>{                                                              //4 //5 ENV 
    console.log(`App is running on port ${PORT}`);
})

