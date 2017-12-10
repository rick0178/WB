var main = function() {
  var hourList = document.getElementById("hourly");
  var dayList = document.getElementById("daily");
  var weekList = document.getElementById("weekly");
  var button = document.getElementById("add");

  function adder() {
    if ($("#input").val() !== "") {
      var input = document.getElementById("input").value;
      habit(input);
      $("#input").val("");
    }
  }

  function habit(input) {
    var entry = document.createElement("li");
    var count = 0;
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
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    entry.appendChild(checkbox);
    plusButton.addEventListener('click', function() {
      count = entry.childNodes[2].innerHTML;
      count = parseInt(count) + 1;
      entry.childNodes[2].innerHTML = " " + count + " ";
      updater();
    });
    minButton.addEventListener('click', function (){
      count = entry.childNodes[2].innerHTML;
      count = parseInt(count) - 1;
      entry.childNodes[2].innerHTML = " " + count + " ";
      updater();
    });
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

  $("#deleteButton").on('click', function(){
    var boxes = document.querySelectorAll(".checkbox")
    for(i = 0; i<boxes.length; i++){
      if(boxes[i].checked){
        boxes[i].parentNode.remove();
      }
    }
  });

  $("#input").on("keypress", function() {
    if (event.which === 13) {
      adder.call(this);
    }
  });

  function updater(){
    var counts = document.querySelectorAll("#hourly .counter").text();
    counts.sort(function(a, b){return b - a});
    var newOl = [];
    for(i = 0; i<counts.length; i++){
      newOl.push(counts[i].parentNode);
    }
    var ol = document.getElementById("hourly")
    while( ol.firstChild ){
  ol.removeChild(ol.firstChild );
  ol.append(newOl);
}

  }

  //for(i = 0; i< counts.length; i++){
  //    if(i > 0 && parseInt(counts[i].innerHTML) > parseInt(counts[i - 1].innerHTML)){
  //      var temp=counts[i - 1].parentNode.innerHTML;
  //      counts[i - 1].parentNode.innerHTML = counts[i].parentNode.innerHTML;
  //      counts[i].parentNode.innerHTML = temp;
  //    }
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
