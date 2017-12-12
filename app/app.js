var main = function() {
  var hourList = [];
  var dayList = [];
  var weekList = [];
  var button = document.getElementById("add");
  var hourContent = document.createElement("ol")
  hourContent.id = "hourly";
  var dayContent = document.createElement("ol");
  dayContent.id = "daily";
  var weekContent = document.createElement("ol");
  weekContent.id = "weekly";

  var habit = function(nameIn){
    name = nameIn;
    count = 10;
  }

  var plusButton = function(){
    var plusButton = document.createElement("button");
    plusButton.appendChild(document.createTextNode("+"));
    plusButton.className = "plusButton";
    return plusButton;
  }

  var minButton = function() {
    var minButton = document.createElement("button");
    minButton.appendChild(document.createTextNode("-"));
    minButton.className = "minButton";
    return minButton;
  }

  function adder() {
    if ($("#input").val() !== "") {
      var input = document.getElementById("input").value;
      var amount = document.getElementById("howOften").value;
      if (amount == "Hourly") {
        hourList.push(new habit(input));
      } else if (amount == "Daily") {
        dayList.push(new habit(input));
      } else {
        weekList.push(new habit(input));
      }
      $("#input").val("");
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

  hourList.forEach(function(habit) {
  hourContent.appendChild(document.createElement("li"));
  entry.appendChild(new minButton());
  entry.createTextNode(habit);
  entry.appendChild(new plusButton());
 });
 $("main .hourContent").append(hourContent);


  var plusClick = function(){
    alert("meme")
  }

  for (var i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener('click', function(event){alert("meme")});
  };

//  var habit = function(input) {
  //  var entry = document.createElement("li");
    //var count = 10;
    //var minButton = document.createElement("button");
    //minButton.appendChild(document.createTextNode("-"));
    //minButton.className = "minButton";
    //entry.appendChild(minButton);
//    entry.appendChild(document.createTextNode(" " + input + " "));
  //  var counter = document.createElement("strong");
//    counter.appendChild(document.createTextNode(" " + count + " "));
//    counter.className = "counter";
//    entry.appendChild(counter);
//    var plusButton = document.createElement("button");
//    plusButton.appendChild(document.createTextNode("+"));
//    plusButton.className = "plusButton";
//    entry.appendChild(plusButton);
//    var amount = document.getElementById("howOften").value;
//    if (amount == "Hourly") {
//      hourList.appendChild(entry);
//    } else if (amount == "Daily") {
//      dayList.appendChild(entry);
//    } else {
//      weekList.appendChild(entry);
//    }
//  }
};

$(document).ready(main);
