// Open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}

let button = document.querySelector("header a");

button.addEventListener("click", () => {
  const span = document.querySelector("a span");
  button.style.paddingRight = '10px;';
  span.style.visibility = "visible";
  setTimeout(() => {
    span.style.visibility = "hidden;";
    button.style.transition = ".3s ease-in-out";
    button.style.paddingRight = "0px";
  }, 3000);
})
var form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault() 

  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var subject = document.getElementById('subject').value
  var msg = document.getElementById('msg').value

  console.log(name)
  console.log(email)
  console.log(subject)
  console.log(msg)
})

function myFunction() {
  alert("Message Sent!")
}