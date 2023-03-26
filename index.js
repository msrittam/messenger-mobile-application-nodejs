const express = require('express')();const mongoose = require('mongoose');const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://admin:passwordpassword@cluster0.3bhyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.model('User',new mongoose.Schema({from:{type:String},pass:{type:String},to:{type:String},message:{type:String}}));express.use(bodyParser.json());
express.post('/signup',async(req,res)=>{const checkto=await mongoose.model('User').find({$or:[{from:req.body.from},{to:req.body.from}]});
if(checkto.length==0){const compose=new mongoose.model('User')({from:req.body.from,pass:req.body.pass,to:req.body.from,
message:'anywhere welcomes you and from now you will see your incoming and outgoing messages below this message'});
await compose.save();const checkthen=await mongoose.model('User').find({$or:[{from:req.body.from},{to:req.body.from}]});
res.send(checkthen);}else{const check=await mongoose.model('User').findOne({from:req.body.from});if(check.pass==req.body.pass){res.send(checkto);}}});
express.post('/send',async(req,res)=>{const checkto=await mongoose.model('User').find({$or:[{from:req.body.to},{to:req.body.to}]});
if(checkto.length!=0){const checko=await mongoose.model('User').find({$or:[{from:req.body.from},{to:req.body.from}]});
if(checko.length==0){const compose=new mongoose.model('User')({from:req.body.from,pass:req.body.pass,to:req.body.from,
message:'anywhere welcomes you and from now you will see your incoming and outgoing messages below this message'});
await compose.save();const compose2=new mongoose.model('User')({from:req.body.from,pass:req.body.pass,to:req.body.to,message:req.body.message});
await compose2.save();const checkthen=await mongoose.model('User').find({$or:[{from:req.body.from},{to:req.body.from}]});
res.send(checkthen);}else{const check=await mongoose.model('User').findOne({from:req.body.from});if(check.pass==req.body.pass){
const compose2=new mongoose.model('User')({from:req.body.from,pass:req.body.pass,to:req.body.to,message:req.body.message});
await compose2.save();const checkthen=await mongoose.model('User').find({$or:[{from:req.body.from},{to:req.body.from}]});
res.send(checkthen);}}}else{const checko=await mongoose.model('User').find({$or:[{from:req.body.from},{to:req.body.from}]});
if(checko.length==0){const compose=new mongoose.model('User')({from:req.body.from,pass:req.body.pass,to:req.body.from,
message:'anywhere welcomes you and from now you will see your incoming and outgoing messages below this message'});
await compose.save();const checkthen=await mongoose.model('User').find({$or:[{from:req.body.from},{to:req.body.from}]});
res.send(checkthen);}else{const check=await mongoose.model('User').findOne({from:req.body.from});if(check.pass==req.body.pass){res.send(checko);}}}});express.listen(process.env.PORT||3000);