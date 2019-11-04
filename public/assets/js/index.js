$(document).ready(function() {
  $(".slider").slider();
  $(".parallax").parallax();
  $(".scrollspy").scrollSpy();
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
  $("select").material_select();
  $(".datepicker").pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  $(".modal-trigger").leanModal();
  $(".carousel").carousel();
  //Add New Employee
  $("#addEmployee-btn").on("click", function() {
    event.preventDefault();

    // Grabbed Values
    var tLastName = $("#lastName")
      .val()
      .trim();
    var tFirstName = $("#firstName")
      .val()
      .trim();
    var tName = tLastName + " " + tFirstName;
    var tUserName = $("#userName")
      .val()
      .trim();
    var tPassword = $("#password")
      .val()
      .trim();
    //Check variables
    console.log(tName);
    console.log(tUserName);
    console.log(tPassword);
    //Construct a newEmp object to hand to the database
    var newEmp = {
      employeeName: $("#lastName").val() + "" + $("#firstName").val(),
      userName: $("#userName")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    };
    //Send an AJAX POST-request with jQuery
    $.post("/api/new-employees", newEmp)
      //On success, run the following code
      .then(function(data) {
        //Log the data we found
        console.log("data:", data);
      });
  });
});
