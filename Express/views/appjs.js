var main = function() {
  var hourList = document.getElementById("hourly");
  var dayList = document.getElementById("daily");
  var weekList = document.getElementById("weekly");
  var button = document.getElementById("add");

  function habit(input, number) {
    var entry = document.createElement("span");
    entry.className = "habit";
    entry.appendChild(document.createTextNode(" " + input + " "));
    this.name = entry;
    var entryN = document.createElement("strong");
    entryN.appendChild(document.createTextNode(" " + number + " "));
    entryN.className = "counter";
    this.count = entryN;
  }

  function adder() {
    if ($("#input").val() !== "") {
      var input = document.getElementById("input").value;
      habitAdder(input);
      $("#input").val("");
    }
  }

  function minButton() {
    var minButton = document.createElement("button");
    minButton.appendChild(document.createTextNode("-"));
    minButton.className = "minButton";
    return minButton;
  }

  function plusButton() {
    var plusButton = document.createElement("button");
    plusButton.appendChild(document.createTextNode("+"));
    plusButton.className = "plusButton";
    return plusButton;
  }

  function checkbox() {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    return checkbox;
  }

  function editInput(value) {
    var entry = document.createElement("input");
    entry.value = value;
    entry.className = "editInput";
    return entry;
  }

  function habitAdder(input) {
    var entry = document.createElement("li");
    var newHabit = new habit(input, 0);
    entry.appendChild(new minButton());
    entry.appendChild(newHabit.name);
    entry.appendChild(new editInput(input));
    entry.appendChild(newHabit.count);
    entry.appendChild(new plusButton());
    entry.appendChild(new checkbox());
    var amount = document.getElementById("howOften").value;
    if (amount == "Hourly") {
      hourList.appendChild(entry);
    } else if (amount == "Daily") {
      dayList.appendChild(entry);
    } else {
      weekList.appendChild(entry);
    }
    updater();
  }

  button.onclick = function() {
    adder();
  };

  $("#deleteButton").on("click", function() {
    var boxes = document.querySelectorAll(".checkbox");
    for (i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) {
        boxes[i].parentNode.remove();
      }
    }
  });

  $("#input").on("keypress", function() {
    if (event.which === 13) {
      adder.call(this);
    }
  });

  document.getElementById("lists").addEventListener("click", function(event) {
    if (event.target.className === "minButton") {
      var count = event.target.parentNode.childNodes[3].innerHTML;
      count = parseInt(count) - 1;
      event.target.parentNode.childNodes[3].innerHTML = " " + count + " ";
      updater();
    }
    if (event.target.className === "plusButton") {
      var count = event.target.parentNode.childNodes[3].innerHTML;
      count = parseInt(count) + 1;
      event.target.parentNode.childNodes[3].innerHTML = " " + count + " ";
      updater();
    }
    if (event.target.className === "habit") {
      event.target.parentNode.className = "edit";
      var input = event.target.nextElementSibling;
      input.focus();
      input.setSelectionRange(0, input.value.length);
    }

    function updateItem() {
      if (this.value != 0) {
        this.previousElementSibling.innerHTML = " " + this.value + " ";
      }
      this.parentNode.className = "";
    }

    $(".editInput").on("keypress", function(newEvent) {
      if (newEvent.which === 13) {
        updateItem.call(this);
      }
    });

    $(".editInput").on("blur", function() {
      updateItem.call(this);
    });
  });

  function updater() {
    var temp;
    var times = ["hourly", "daily", "weekly"];
    for (y = 0; y < 100; y++) {
      for (x = 0; x < times.length; x++) {
        if (times[x] === "hourly") {
          var counts = document.querySelectorAll("#hourly .counter");
        } else if (times[x] === "daily") {
          var counts = document.querySelectorAll("#daily .counter");
        } else {
          var counts = document.querySelectorAll("#weekly .counter");
        }

        for (i = 1; i < counts.length; i++) {
          if (
            parseInt(counts[i - 1].innerHTML) < parseInt(counts[i].innerHTML)
          ) {
            temp = counts[i].parentNode.innerHTML;
            counts[i].parentNode.innerHTML = counts[i - 1].parentNode.innerHTML;
            counts[i - 1].parentNode.innerHTML = temp;
          }
        }
      }
    }
  }

  //  function updater(){
  //    var counts = document.querySelectorAll("#hourly .counter");
  //    counts.sort(function(a, b){return b - a});
  //    var newOl = [];
  //    for(i = 0; i<counts.length; i++){
  //      newOl.push(counts[i].parentNode);
  //    }
  //    var ol = document.getElementById("hourly")
  //    while( ol.firstChild ){
  //  ol.removeChild(ol.firstChild );
  //  ol.append(newOl);
  //}

  //}

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
