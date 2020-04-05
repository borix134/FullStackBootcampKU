$("#submit").on("click", function(event){
    event.preventDefault();
    $.ajax({
        method: "POST",
        url: "/api/burger",
        data: {
            name: $("#burgername").val()
        }
      }).then(function(data) {
        location.reload();
      });
  
    $("#burgername").val("");
});