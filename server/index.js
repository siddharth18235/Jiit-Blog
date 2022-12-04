const app=require('express')();
const  mongoose = require('mongoose');
const cors =require('cors');

const {PORT,DB_URI,APP_PREFIX_PATH, ALLOWED_URL}= require('./config/config');
const indexRoute = require('./routes/index.route');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors({
    origin: ALLOWED_URL
}));

app.use(APP_PREFIX_PATH, indexRoute);

app.use('/',(req,res,next)=>{
    res.send({"status":"path not found"})
})
mongoose.connect(DB_URI).then(()=>{
    console.log("URI connected");
    app.listen(
        PORT,
        () =>console.log(`it is alive on http://localhost:${PORT}`)
        )
    })