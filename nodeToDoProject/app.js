  //entry point for the application this app.js file
  var express = require('express');//getting module express
  //calling the controllers function and storing it on the variable toDoController
  var toDoController = require('./controllers/todoController');
  //we have set up out app using express();
  var app = express();//storing express function in the variable app

  //set up template view engine
  app.set('view engine', 'ejs');

  //we have set up static file using middle ware express.static
  app.use(express.static('./public'));

  //localhost:3000/assets/styles.css

  //fire controllers
  toDoController(app);

  app.listen(3000);
  console.log('You are listening to port number 3000');
