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

  $("#addEmployee-btn").on("click", function(event) {
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
      userId: tUserName,
      empName: tName,
      empPassword: tPassword,
      manager: false
    };

    //Send an AJAX POST-request with jQuery
    $.post("/api/new-employees", newEmp)
      //On success, run the following code
      .then(function(data) {
        //Log the data we found
        console.log("data:", data);
      });
  });

  var currentUser = {
    id: 0,
    userId: "",
    empName: "",
    manager: false
  };

  //Geolocation
  $("#clockIn").on("click", function() {
    var latitude = "";
    var longitude = "";
    var currentTime = moment(currentTime).format("hh:mm");
    console.log(currentTime);
    getLocation();
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Cant get location");
      }
    }
    function showPosition(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
    }
  });

  $("#clockOut").on("click", function() {
    console.log("You clicked me");
  });

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
          window.location.href = "http://localhost:3000/home/" + currentUser.id;
        } else {
          console.log("Why isn't this working!!!!");
        }
      });
    }
  });

  var retrievedUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(retrievedUser);

  $(".brand-logo").on("click", function() {
    window.location.href = "http://localhost:3000/home/" + retrievedUser.id;
  });

  $("#viewPunch").on("click", function() {
    var queryUrl = "/api/employees/" + retrievedUser.id;
    $.get(queryUrl, function(data) {
      var timePunches = data.timePunches;
      window.location.href = "http://localhost:3000/timePunch/" + data.id;
      console.log(timePunches);
    });
  });

  $(".fired").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    // console.log("clicky click");
    $.ajax("/api/delEmployee/" + id, {
      type: "DELETE"
    }).then(function() {
      location.reload();
    });
  });

  $(".viewPunches").on("click", function() {
    var id = $(this).data("id");
    var queryUrl = "/api/employees/" + id;
    $.get(queryUrl, function(data) {
      var timePunches = data.timePunches;
      window.location.href = "http://localhost:3000/timePunch/" + data.id;
      console.log(timePunches);
    });
  });
});
