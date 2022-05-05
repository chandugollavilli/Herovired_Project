const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri ="mongodb+srv://Chandu:chandu123@cluster0.wobdj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);

// async function run() {
//     try {
//       await client.connect();
//       const database = client.db("myblog");
//       const haiku = database.collection("userData");
//       // create a document to insert
//       const doc = {
//         title: "Record of a Shriveled Datum",
//         content: "No bytes, no problem. Just insert a document, in MongoDB",
//       }
//       const result = await haiku.insertOne(doc);
//       console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

  app.post('/sendData',function(req,res){
    //res.sendFile(__dirname + '/pages/sample.html');
    console.log(req.body);
    //res.send(req.body);
    var obj = new assignment({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    assignment.findOne({email:req.body.email}, function(err,docs){
        if(err || docs==null){
            console.log(err)
            obj.save(function(err, results) {
                if(results){
                   console.log("results"+ results);
                    res.send(results);
                }else{
                    console.log(err)
                    res.send(err);
                }
            })
        }
        else{
            res.sendStatus(500)
        }
    })
   
});


app.post('/deletedatabyid',(req,res)=>{
    //res.sendFile(__dirname + '/pages/sample.html');
    //console.log(req.body);
    //res.send(req.body);
    
    // obj.save(function (err, results) {
    //     if(results){
    //        console.log(results);
    //         res.send(results);
    //     }else{
    //         res.send(err);
    //     }
    // })
    Sample.findOneAndRemove({_id: req.body.id}, req.body, function(err,results)
{
    if(!err){
        console.log("Deleted");
    }else{
        res.send(results)
    }
});


});


app.get('/getuserData',(req,res)=>{
assignment.find(function(err,result){
        if(err || result==null)
        {
            
            console.log(err)
        }
        else if(result!=undefined)
        {
            
            console.log(result)
            res.send(result);
        }
    })
});





app.get("/login", function(req,res){
    console.log(__dirname + "/login.html")
    // res.sendFile(__dirname + "/login.html");
});
app.get("/index", function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/register", function(req,res){
    res.sendFile(__dirname + "/register.html");
});
 



// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/index.html");
// });

// app.get('/login',function(req,res){
//     res.sendFile(__dirname + "/template/pages/samples/login.html");
// });
// app.get('/signup',function(req,res){
//     res.sendFile(__dirname + "/template/pages/samples/register.html");
// });
// app.get('/adminlogin',function(req,res){
//     res.sendFile(__dirname + "/template/pages/samples/admin login.html");
// });





app.listen(8080, ()=> console.log("Successfully Server Started"));