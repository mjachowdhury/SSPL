//when document is ready function is fire
$(document).ready(function(){
//when submit button pressed then this function will be fire
  $('form').on('submit', function(){
    //from input field data will be stored on var item
      var item = $('form input');
      var todo = {item: item.val()};
      //ajax request to the server
      $.ajax({
        type: 'POST',//type of req is POST
        url: '/todo',//route is todo page
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
