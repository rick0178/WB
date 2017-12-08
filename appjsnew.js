var main = function() {
  var hourList = document.getElementById("hourly");
  var dayList = document.getElementById("daily");
  var weekList = document.getElementById("weekly");
  var button = document.getElementById("add");

  var habit = {
    this.name = name;
    this.count = count;
  }

  var plusButton = {

  }

  function adder() {
    if ($("#input").val() !== "") {
      var input = document.getElementById("input").value;
      habit(input);
      $("#input").val("");
    }
  }

  function habit(input) {
    var entry = document.createElement("li");
    var count = 10;
    var minButton = document.createElement("button");
    minButton.appendChild(document.createTextNode("-"));
    minButton.className = "minButton";
    entry.appendChild(minButton);
    entry.appendChild(document.createTextNode(" " + input + " "));
    var counter = document.createElement("strong");
    counter.appendChild(document.createTextNode(" " + count + " "));
    counter.className = "counter";
    entry.appendChild(counter);
    var plusButton = document.createElement("button");
    plusButton.appendChild(document.createTextNode("+"));
    plusButton.className = "plusButton";
    entry.appendChild(plusButton);
    var amount = document.getElementById("howOften").value;
    if (amount == "Hourly") {
      hourList.appendChild(entry);
    } else if (amount == "Daily") {
      dayList.appendChild(entry);
    } else {
      weekList.appendChild(entry);
    }
  }

  button.onclick = function() {
    adder();
  };

  $("#input").on("keypress", function() {
    if (event.which === 13) {
      adder.call(this);
    }
  });

  $(".plusButton").on("click", function() {
    console.log("bjhbkj");
  });

  //  Hourly.forEach(function(habit) {
  //  $hourContent.append($("<li>").text(habit));
  //});
  //$("main .Hourly").append($hourContent);

  //Daily.forEach(function(habit) {
  //  $dayContent.append($("<li>").text(habit));
  //});
  //$("main .Daily").append($dayContent);

  //  Weekly.forEach(function(habit) {
  //  $weekContent.append($("<li>").text(habit));
  //});
  //$("main .Weekly").append($weekContent);

  //  habits.forEach(function(habit) {
  //    $content.append($("<li>").text(habit));
  //  });
  //  $("main .content").append($content);

  //($input = $("<input>")),
  //($button = $("<button>").text("+")),
  //$button.on("click", function() {
  //if ($input.val() !== "") {
  //habits.push($input.val());
  //$input.val("");
  //}
  //});
  //$content = $("<div>")
  //  .append($input)
  //  .append($button);
  /* Alternatively append() allows multiple arguments so the above
               can be done with $content = $("<div>").append($input, $button); */

  //  $("main .content").append($content);
};

$(document).ready(main);
