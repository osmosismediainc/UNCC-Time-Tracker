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
    var queryUrl = "/api/view-employees/" + userIdInput + "/" + loginPassword;

    if (userIdInput === "" || loginPassword === "") {
      console.log("Err");
    } else {
      $.get(queryUrl, function(data) {
        if (data) {
          currentUser = {
            id: data.id,
            userId: data.userId,
            empName: data.empName,
            manager: data.manager
          };
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          console.log(currentUser);
          window.location.replace(
            "http://localhost:3000/home/" + currentUser.id
          );
        } else {
          console.log("Why isn't this working!!!!");
        }
      });
    }
  });

  var retrievedUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("retrievedUser: ", retrievedUser);

  $("#viewPunch").on("click", function() {
    var queryUrl = "/api/employees/" + retrievedUser.id;
    $.get(queryUrl, function(data) {
      var timePunches = data.timePunches;
      window.location.replace("http://localhost:3000/timePunch/" + data.id);
      console.log(timePunches);
      console.log("this is data: " + data.TimePunches);
    });
  });

  $(".fired").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.destroy("/api/delEmployee/" + id, {
      // type: "PUT"
    }).then(function() {
      location.reload();
    });
  });
});
