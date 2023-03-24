window.addEventListener("load", function() {
  let form1 = document.querySelector("form#dropSurvey");
  let animal1 = document.querySelector("animal1");
  form1.addEventListener("submit", function(event) {
    event.preventDefault();
    //code inside function
    const animalSelect = document.getElementById("Animals").value;
    animal1.removeAttribute("class");
    document.querySelector("span#answer1").innerText = animalSelect;
  })
});