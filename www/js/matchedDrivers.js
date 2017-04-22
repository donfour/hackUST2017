function matchedDrivers() {
  $(document).ready(function(){
    //click on button submit
    $("#submit").on('click', function(){
      //send ajax
      var posting = $.post('test.php', $("#passengerForm").serialize(), function(data) {
        window.location = 'matchedDrivers.html';

        var drivers = JSON.parse(response.responseText);
        document.getElementById("name").innerHTML = driver[0].name;
        document.getElementById("pickupTime").innerHTML = driver[0].StartTime;
        document.getElementById("arrivalTime").innerHTML = driver[0].EndTime;

      }, 'json');
    })
  })

}
