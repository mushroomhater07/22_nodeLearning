const vaieb = [{
    "dimension" : 0,
    "currency": "RMB",
    "quantity": "100",
    "price": "3",
    "factory": "rx"},
  {
    "dimension" : 0,
    "currency": "RMB",
    "quantity": "200",
    "price": "4",
    "factory": "rx"},
];

// app.use(express.static('hthtml'));         //use hthtml
app.set('views', './ejsview');
app.set('view engine', 'ejs');
app.use(express.json());           //accept data in JSON format
app.use(express.urlencoded({ extended: true })); //decode the data send though the form
//app.use(express.urlencoded(extends =false))      //body-parser is middleware

app.get('', (req,res) => {
  res.sendFile(__dirname+'/hthtml/index.html') //use typical .html
  //res.send //send data out
});

app.get('/about', (req, res) => {
    res.render('index', {text: vaieb});   //dynamic html page .ejs .pub
});