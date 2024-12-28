const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
require('dotenv').config()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

//middleware
app.use(express.json({limit:"25mb"}));
//app.use((express.urlencoded({limit:"25mb"})));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
  orgin: 'http://localhost:5173',
  credentials: true
}))

// routes
 const authRoutes = require('./src/users/user.route');

 app.use('/api/auth',authRoutes)

//HS92pjefos4betzy
main().then(()=> console.log(" mongoDB id successfully connected")).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);

    app.get('/', (req, res) => {
        res.send('Lebaba E-commerce Server...!')
      });
  
}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})