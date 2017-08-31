var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config={
    user: 'shreyashambhawi',
    database: 'shreyashambhawi',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var pool = new Pool(config);



var app = express();
app.use(morgan('combined'));

var articles= {
    'article-one':{
      title: 'Article One | Shreya Shambhawi Singh',  
      heading: 'Article One',
      date: '25 March,2017',
      content:`<p>
                 This is the content of my first article
               </p>`
    },      //ArticleOne: {},
    'article-two':{
        title: 'Article Two | Shreya Shambhawi Singh',  
      heading: 'Article Two',
      date: '25 March,2017',
      content:`<p>
                 This is the content of my second article
               </p>`
    },      //ArticleTwo: {},
    'article-three':{
        title: 'Article Three | Shreya Shambhawi Singh',  
      heading: 'Article Three',
      date: '25 March,2017',
      content:`<p>
                 This is the content of my third article
               </p>`
    }     //ArticleThree: {}
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var httpTemplate=`
    <head>
        <title>
            ${title};
        </title>
        <meta name="viewport" content="width-device-width, initial-scale-1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
                </p>
            </div>
        </div>
    </body>
    </html>` ;
    return httpTemplate;
}

app.get('/test-db',function(req,res) {
    //make a select request
    pool.query('SELECT * FROM TEST', function(err,result){
        if (err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result.rows));
        }
    });
    //return a response with the results
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res) {
   counter=counter+1;
   res.send(counter.toString());
});

function hash(input,salt){
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return ['pbkdf2','100000','512',salt,hashed.toString('hex')].join('$');
}

app.get('/createUser',function(req,res){
   var salt = crypto.getRandonBytes(128).toString(hex);
   var dbString = hash(password);
   pool.query('INSERT INTO "user" (username,password) VALUES ($1,$2)',[username,dbString],function(err,result){
        if (err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send('User successfully created: +'username);
        }       
   });
});

app.get('/hash/:input',function(req,res){
   var hashedString = hash(req.params.input,'this-is-some-random-string');
   res.send(hashedString);
});

var names=[];
app.get('/submit-name',function(req,res){ //URL= /submit-name?name=xxxx
    //Get the name to be input
    var name=req.query.name;
    //Push the name in the list
    names.push(name);
    //Send the response
    //JSON : Javascript Object Notation
    res.send(JSON.stringify(names));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


/*app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
*/

app.get('/:articleName',function(req,res){
    //articleName==article-one
    //article[articleName]=={} content object for article one
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
