$(document).ready(function(){

  $.ajax({
    url: "./members/members.json",
    dataType: "json",
    success: function(data) {
      var template = document.getElementById('membersTemplate').innerHTML;
      document.getElementById("page").innerHTML = Mustache.render(template, data);
    }
  });  

});