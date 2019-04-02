$(document).ready(function() {
  $("#formOne").submit(function(event) {


    var values = ["adj1", "adj2", "adj3", "adj4", "artOfCloth", "exclamation", "geo",
                  "noun", "bodypart", "plurN1", "plurN2", "plurN3", "Spanish1", "Spanish2", "plurN3"];

      for(var term = 0; term < values.length; term +=1) {
        var lib = $("#" + values[term]).val();
        $("." + values[term]).text(lib);
      }

      $("#story").show();
      event.preventDefault();
    });
  });
