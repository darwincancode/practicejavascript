const buttonListener = document.getElementById("buttonListener");
buttonListener.addEventListener("click", function () {
  const currentColor =
    document.getElementById("divChange").style.backgroundColor;
  if (currentColor == "red") {
    document.getElementById("divChange").style.backgroundColor = "green";
    document.getElementById("displayDate").innerHTML = " ";
    document.getElementById("displayDate").innerHTML = Date();
  } else {
    document.getElementById("divChange").style.backgroundColor = "red";
    document.getElementById("displayDate").innerHTML = " ";
    document.getElementById("displayDate").innerHTML = Date();
  }
});

const clickDisplayTime = document.getElementById("clickDisplayTime");
clickDisplayTime.addEventListener("click", function () {
  document.getElementById("displaytime").innerHTML = Date();
});

const clickStringLenth = document.getElementById("clickStringLenth");
clickStringLenth.addEventListener("click", function () {
  let text_one = "Learning Javascript Code";
  let displayLength = text_one.length;
  document.getElementById("displayLength").innerHTML =
    text_one + ", Text length is: " + displayLength;
});
