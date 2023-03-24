window.addEventListener("load", function() {
  let form1 = document.querySelector("form#dropSurvey");
  let animal1 = document.querySelector("h3#animal1");
  let div2 = document.querySelector("div#secondQuest");
  //
  form1.addEventListener("submit", function(event) {
    event.preventDefault();
    //
    const animalSelect = document.getElementById("Animals").value;
    animal1.removeAttribute("class");
    document.querySelector("span#answer1").innerText = animalSelect;
    div2.removeAttribute("class");
    let form2 = document.querySelector("form#superHero");
    let hero1 = document.querySelector("h3#hero1");
    let div3 = document.querySelector("div#thirdQuest");
    //
    form2.addEventListener("submit", function(event) {
      event.preventDefault();
      //
      const heroSelect = document.getElementById("heroes").value;
      hero1.removeAttribute("class");
      document.querySelector("span#answer2").innerText = heroSelect;
      div3.removeAttribute("class");
      let form3 = document.querySelector("form#favColor");
      let color1 = document.querySelector("h3#color1");
      let div4 = document.querySelector("div#fourthQuest");
      //
      form3.addEventListener("submit", function(event) {
        event.preventDefault();
        const favoriteColor = document.getElementById("colorWord").value;
        color1.removeAttribute("class");
        document.querySelector("span#answer3").innerText = favoriteColor;
        div4.removeAttribute("class");
        let form4 = document.querySelector("form#vacationChoice");
        let vacation1 = document.querySelector("h3#vacation1");
        let div5 = document.querySelector("div#lastQuest");
        //
        form4.addEventListener("submit", function(event) {
          event.preventDefault();
          const vacationSelect = document.getElementById("destination").value;
          vacation1.removeAttribute("class");
          document.querySelector("span#answer4").innerText = vacationSelect;
          div5.removeAttribute("class");
        })
        })
      })

    })
  });

