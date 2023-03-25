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
        const favoriteColor1 = document.getElementById("color1Range").value;
        const favoriteColor2 = document.getElementById("color2Range").value;
        const favoriteColor3 = document.getElementById("color3Range").value;
        color1.removeAttribute("class");
        document.querySelector("span#answer3a").innerText = favoriteColor1;
        document.querySelector("span#answer3b").innerText = favoriteColor2;
        document.querySelector("span#answer3c").innerText = favoriteColor3;
        })
        //
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
          let form5 = document.querySelector("form#programLang");
          let div6 = document.querySelector("div#linkUp");
          //
          form5.addEventListener("submit", function(event) {
            event.preventDefault();
            const languageSelect = document.querySelector("input[name='language']:checked").value;
            div6.removeAttribute("class");
            document.querySelector("span#answer5").innerText = languageSelect;
            const suResult1 = document.querySelector("span#survResult1");
            const suResult2 = document.querySelector("span#survResult2");
            const suResult3 = document.querySelector("span#survResult3");
            const suResult4 = document.querySelector("span#survResult4");
            const suResult5 = document.querySelector("span#survResult5");
             let result;
            if (languageSelect === "Ruby") {
              result = suResult1.removeAttribute("class");
            } else if (languageSelect === "C#") {
              result = suResult2.removeAttribute("class");
            } else if (languageSelect === "JavaScript") {
              result = suResult3.removeAttribute("class");
            } else if (languageSelect === "Go") {
              result = suResult4.removeAttribute("class");
            } else if (languageSelect === "Python") {
              result = suResult5.removeAttribute("class");
            }
          });
        });
        });
      });
    });
