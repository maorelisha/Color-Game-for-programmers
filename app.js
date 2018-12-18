let tempSquare;
let numOfSquares = 6;
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function renderColors() {
  $(".square").each(function() {
    $(this).css("background-color", getRandomColor());
  });
  var random = Math.floor(Math.random() * numOfSquares);
  tempSquare = $(".square").eq(random);
  console.log(tempSquare.css("background-color"));
  $(".tempRgb").text(tempSquare.css("background-color").slice(3));
  $(".header").css("background-color", "steelblue");
  $(".text").text("");
}

renderColors();

$(".square").on("click", function() {
  if ($(this).css("background-color") === tempSquare.css("background-color")) {
    $(".square").css("background-color", tempSquare.css("background-color"));
    $(".header").css("background-color", tempSquare.css("background-color"));
    $(".text").text("YES YOU DID IT!");
  } else {
    $(this).css("background-color", "#232323");
    $(".text").text("WRONG! TRY AGAIN");
  }
});

$("#new").on("click", function() {
  renderColors();
});
$("#easy").on("click", function() {
  $(".second-row").hide();
  numOfSquares = 3;
  renderColors();
});
$("#hard").on("click", function() {
  $(".second-row").show();
  numOfSquares = 6;
  renderColors();
});
