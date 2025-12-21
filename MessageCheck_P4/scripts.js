var input = document.getElementById("message-input");
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    getMessage();
  }
});

function getMessage() {
  var message = input.value.trim();
  document.getElementById("message-output").innerHTML = message;
  message="";
}