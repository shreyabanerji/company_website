const express=require('express');
//for http methodes
const morgan=require('morgan');
//shows that request has been made
const bodyParser=require('body-parser');
//extract form data from front end and show in proper format

const mongoose=require('mongoose');
const dotenv=require('dotenv');
const multer = require('multer');
const User= require('./models/user');

dotenv.config();

//Middlewares----ability to parse data from front end 
const app=express();

mongoose.connect(process.env.DATABASE,
{ useNewUrlParser: true ,useUnifiedTopology: true },
err => {
    if(err){
        console.log(err);
        console.log("Error");
    }
    else{
        console.log("Connected");
    }
}
);

//middlewares
app.use(morgan('dev'));
app.use(express.static('upload'));
app.use(express.static('logos'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//get data from the server

//require apis
/*
const hotelRoutes=require('./routes/hotels');
const cityRoutes=require('./routes/cities');
const roomRoutes=require('./routes/rooms');
const typeRoutes=require('./routes/types');
const userRoutes=require('./routes/auth');
const likeRoutes=require('./routes/likes');
const reccomendationRoutes=require('./routes/recommendation');
const bookingRoutes=require('./routes/booking')
const readRoutes=require('./routes/read_file')
const getHotelRoutes=require('./routes/getHotels')
const getLikesRoutes=require('./routes/getlikes')

app.use('/api',hotelRoutes);
app.use('/api',cityRoutes);
app.use('/api',roomRoutes);
app.use('/api',typeRoutes);
app.use('/api',userRoutes);
app.use('/api',likeRoutes);
app.use('/api',reccomendationRoutes);
app.use('/api',bookingRoutes);
app.use('/api',readRoutes);
app.use('/api',getHotelRoutes);
app.use('/api',getLikesRoutes);


*/
const companyRoutes=require('./routes/company');
const userRoutes=require('./routes/auth');
const userCompRoutes=require('./routes/user_comp');


app.use('/api',companyRoutes);
app.use('/api',userRoutes);
app.use('/api',userCompRoutes);

app.listen(3000,(err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log("Not an error");
    }
});