window.addEventListener("load", function() {
  let form1 = document.querySelector("form#dropSurvey");
  let animal1 = document.querySelector("h3#animal1");
  let div2 = document.querySelector("div#secondQuest");
  form1.addEventListener("submit", function(event) {
    event.preventDefault();
    //code inside function
    const animalSelect = document.getElementById("Animals").value;
    animal1.removeAttribute("class");
    document.querySelector("span#answer1").innerText = animalSelect;
    div2.removeAttribute("class");
    let form2 = document.querySelector("form#superHero");
    let hero1 = document.querySelector("h3#hero1")
    form2.addEventListener("submit", function(event) {
      event.preventDefault();
      const heroSelect = document.getElementById("heroes").value;
      hero1.removeAttribute("class");
      document.querySelector("span#answer2").innerText = heroSelect;
    })
  })
});

