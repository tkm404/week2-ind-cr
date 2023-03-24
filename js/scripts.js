window.addEventListener("load", function() {
  let form = document.querySelector("surveyText")
  form.addEventListener("submit", function(event) {
    //code inside function
    event.preventDefault();
  })
});