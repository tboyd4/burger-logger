$(function() {
  $(".devour").on("click", function(event) {
    console.log("i'm clicked Ya'll");
    var id = $(this).data("id");
    var newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      console.log("changed devour to true");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#submit-btn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new_burger")
        .val()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
