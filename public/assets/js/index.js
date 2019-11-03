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
    var tName = $("#lastName" + ", " + "#firstName");
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
    //Create new row to add new employee data
    var newRow = $("<tr>");
    newRow.prepend($("<td>" + tName + "</td>"));
    newRow.prepend($("<td>" + tUserName + "</td>"));
    newRow.prepend($("<td>" + tPassword + "</td>"));
    // Prepend the new row to the table
    $("#employeeList").prepend(newRow);
  });
});
