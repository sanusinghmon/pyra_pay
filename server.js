require('dotenv').config({path: '.env'}); 
var express = require("express");
const http = require("http");
const cors = require('cors');
const path = require("path");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectID;
var session = require("express-session");
var cookieParser = require('cookie-parser');
const expressLayout = require("express-ejs-layouts");
var app = express();
let ejs = require("ejs");
app.use(cors());  
const router = express.Router();

// const process = require('./process');
// const pages = require('./pages');


router.get('/',(req,res)=>{
   res.render('index',{layout:false});
})
router.get('/index',(req,res)=>{
   res.render('index',{layout:false})
})
router.get('/about',(req,res)=>{
   res.render('about',{layout:false});
})
router.get('/B2b-api',(req,res)=>{
   res.render('B2b-api',{layout:false});
})
router.get('/contact',(req,res)=>{
   res.render('contact',{layout:false});
})
router.get('/Financial-service',(req,res)=>{
   res.render('Financial-service',{layout:false});
})
router.get('/four-column',(req,res)=>{
   res.render('four-column',{layout:false});
})
router.get('/Gst-center',(req,res)=>{
   res.render('Gst-center',{layout:false});
})
router.get('/infinite-scroll',(req,res)=>{
   res.render('infinite-scroll',{layout:false});
})
router.get('/load-more',(req,res)=>{
   res.render('load-more',{layout:false});
})
router.get('/login',(req,res)=>{
   res.render('login',{layout:false});
})
router.get('/Neo',(req,res)=>{
   res.render('Neo',{layout:false})
})
router.get('/suryoday_csp',(req,res)=>{
   res.render('suryoday_csp',{layout:false})
})
router.get('/NSDL-csp',(req,res)=>{
   res.render('NSDL_csp',{layout:false})
})
router.get('/one-column',(req,res)=>{
   res.render('one-column',{layout:false})
})
router.get('/other-service',(req,res)=>{
   res.render('other-service',{layout:false})
})
router.get('/pricing',(req,res)=>{
   res.render('pricing',{layout:false})
})
router.get('/pricing',(req,res)=>{
   res.render('pricing',{layout:false})
})
router.get('/service',(req,res)=>{
   res.render('service',{layout:false})
})
router.get('/sign-up',(req,res)=>{
   res.render('sign-up',{layout:false})
})
router.get('/single-post',(req,res)=>{
   res.render('single-post',{layout:false})
})
router.get('/team',(req,res)=>{
   res.render('team',{layout:false})
})
router.get('/two-column',(req,res)=>{
   res.render('two-column',{layout:false})
})

app.use("/", express.static(path.join(__dirname, "/public")));
app.use(expressLayout);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(session({ 
  secret: "Cryptovers",
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7,httpOnly: false, },
  httpOnly: false,
  resave: true
}));
const httpServer = http.createServer(app);
app.use("/", router);
httpServer.listen(process.env.PORT, () => {
    console.log('Server is running');
});