$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var adj1Input = $("input#adj1").val();
    var adj2Input = $("input#adj2").val();
    var adj3Input= $("input#adj3").val();
    var adj4Input= $("input#adj4").val();
    var artoclothInput= $("input#artofcloth").val();
    var exclamationInput = $("input#exclamation").val();
    var geoInput = $("input#geo").val();
    var nounInput = $("input#noun").val();
    var bodypartInput = $("input#bodypart").val();
    var plurN1Input = $("input#plurN2").val();
    var plurN2Input = $("input#plurN2").val();
    var Spanish1Input = $("input#Spanish1").val();
    var Spanish2Input = $("input#Spanish2").val();
    var plurN2Input = $("input#plurN2").val();

    $(".adj1").text(adj1Input);
    $(".adj2").text(adj2Input);
    $(".adj3").text(adj3Input);
    $(".adj4").text(adj4Input);
    $(".artofcloth").text(artofclothInput);
    $(".exclamation").text(exclamationInput);
    $(".geo").text(geoInput);
    $(".noun").text(nounInput);
    $(".bodypart").text(bodypartInput);
    $(".plurN1").text(plurN1Input);
    $(".plurN2").text(plurN2Input);
    $(".Spanish1").text(Spanish1Input);
    $(".Spanish2").text(Spanish2Input);
    $(".plurN2").text(plurN2Input);

    $("#story").show();

    event.preventDefault();
  });
});
