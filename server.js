var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one' : {
        title: 'Article-one | Harsh Agrawal',
        heading: 'Article-one',
        date: '05sept-2016',
        content: `
        <p>
            This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-two for my first article. This is article-one for my first article. This is article-one for my first article.
                    </p>
                    <p>
                        This is article-two for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article.
                    </p>
                    <p>
                        This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article.
                    </p>`    
        
        
    },
    'article-two' : {
        title: 'Article-two | Harsh Agrawal',
        heading: 'Article-two',
        date: '10sept-2016',
        content: `
        <p>
            This is article-two for my first article. This is article-one for my first article. This is article-one for my first article. This is article-two for my first article. This is article-one for my first article. This is article-one for my first article.
                    </p>
                    <p>
                        This is article-two for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article.
                    </p>
                    <p>
                        This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article.
                    </p>`    
        
        
    },
    'article-three' : {
        title: 'Article-three | Harsh Agrawal',
        heading: 'Article-three',
        date: '15sept-2016',
        content: `
        <p>
            This is article-three for my first article. This is article-one for my first article. This is article-one for my first article. This is article-three for my first article. This is article-one for my first article. This is article-one for my first article.
                    </p>
                    <p>
                        This is article-three for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article.
                    </p>
                    <p>
                        This is article-three for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article. This is article-one for my first article.
                    </p>`    
        
    }
};



function createtemplate (data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
    var htmltemplate= `
        <HTML>
            <head>
                <Title>
                    ${title}
                </Title>
                <meta name="viewport" content="width=device-width, intial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <Body>
                <div class="container">
                    <div>
                        <a href="/"> home </a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading} 
                    
                    </h3>
                    <div> ${date} </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </Body>
        </HTML>
        `;
        return htmltemplate;
    
}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter= 0;
app.get('/counter', function (req, res) {
    counter=counter + 1;
    res.send(counter.toString())
    
})

app.get('/:articlename', function(req,res){
    var articlename= req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


var names= [];
app.get('submit-name/:name', function (req, res) {
  var name = req.params.name;
  names.push(name);
  //json (Javascript Object Notation) Method of converting javascript to string
  
  
  res.send(JSON.stringify(names));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
