      //controller to do list
      //rendering the data to the view and handling the routing

      var bodyParser = require('body-parser');//caling module of body-parser
      var mongoose = require('mongoose');//calling module of mongoose

      //connect to the databse
      mongoose.connect('mongodb://test:test@ds233895.mlab.com:33895/todolist');

      //create schema - this is like a blue print.

      var todoSchema = new mongoose.Schema({
        item: String
      });
      //model name
      var Todo = mongoose.model('Todo', todoSchema);

      //adding item in the mongoo
      /*
      //do not want every time to add new item into the data base
      var itemOne = Todo({item: 'get flowers'}).save(function(err){
        if(err)throw err;
        console.log('item saved');
      });
      */


      //after creating mongoo db do not nedd this
      //var data = [{item: 'get milk'}, {item: 'walk now'}, {item: 'start learing'}];

      var urlencodedParser = bodyParser.urlencoded({extended: false});

      module.exports = function(app){

      //handler for get request
      app.get('/todo', function(req, res){
        //get data from the mongodb and pass it to view
        //to get all the item and sendin empty
        Todo.find({}, function(err, data){
          if(err) throw err;
          res.render('todo', {todos: data});
        });
      });
      //handler for post request
      app.post('/todo', urlencodedParser, function(req, res){
        //get data from the view and added it mongodb
        var newTodo =Todo(req.body).save(function(err, data){
          if(err) throw err;
          res.json(data);
        });
      });
      //handler for delete request
      app.delete('/todo/:item', function(req,res){//request and response object
        //delete the requested item from mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
          if(err) throw err;
          res.json(data);
        });
       
        });


      }
