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

  var currentUser = {
    id: 0,
    userId: "",
    empName: "",
    manager: false
  };

  // Detects if the users userName and Password are in the database. If not throw err
  $("#login-btn").on("click", function() {
    var userIdInput = $("#userIdInput").val();
    var loginPassword = $("#loginPassword").val();
    console.log(userIdInput);
    console.log(loginPassword);
    var queryUrl = "/api/view-employees/" + userIdInput + "/" + loginPassword;

    if (userIdInput === "" || loginPassword === "") {
      console.log("Err");
      return false;
    } else {
      $.get(queryUrl, function(data) {
        if (data) {
          console.log(data);
          currentUser = {
            id: data.id,
            userId: data.userId,
            empName: data.empName,
            manager: data.manager
          };
          $($("#login-btn")).attr("href", "/home");
          console.log(currentUser);
        } else {
          console.log("Error");
          return false;
        }
      });
    }
  });

  $("#clockIn").on("click", function() {
    console.log(currentUser);
  });
});
