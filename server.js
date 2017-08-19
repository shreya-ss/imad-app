var express = require('express');
var morgan = require('morgan');
var path = require('path');

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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
