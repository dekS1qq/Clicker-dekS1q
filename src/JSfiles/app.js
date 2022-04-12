import * as gameModule from "./elements.js";

//Wartości początkowe gry
let score = 0;
let moneyPerSecond = 0;
let actualMoneyPerClick = 1;
let glassesPrice = 100;
let watchPrice = 2000;
let bikePrice = 25000;
let computerPrice = 50000;
let howManyGlasses = 0;
let howManyWatch = 0;
let howManyBike = 0;
let howManyComputer = 0;
let addMoneyPerSecond = 0;
let priceUpgrade = 0;
let moneyPerSecondGlasses = 0;
let addMoneyPerSecondGlasses = 0;
let moneySpentForGlasses = 0;
let moneyPerSecondWatch = 0;
let addMoneyPerSecondWatch = 0;
let moneySpentForWatch = 0;
let moneyPerSecondBike = 0;
let addMoneyPerSecondBike = 0;
let moneySpentForBike = 0;
let moneyPerSecondComputer = 0;
let addMoneyPerSecondComputer = 0;
let moneySpentForComputer = 0;
let saveScore = 0;

saveScore = localStorage.getItem("score");
score = Number(saveScore);

onload = () => {
  //Aktualizowanie pieniędzy
  let addMoney = setInterval(() => {
    localStorage.setItem("score", score);

    addMoneyPerSecond = moneyPerSecond / 5;
    gameModule.showMoneyPerSecond.innerText =
      "Money per second: " + moneyPerSecond.toFixed(2) + "$";
    score += addMoneyPerSecond;
    gameModule.money.innerText = "Money: " + score.toFixed(2) + "$";

    addMoneyPerSecondGlasses += moneyPerSecondGlasses / 5;
    addMoneyPerSecondWatch += moneyPerSecondWatch / 5;
    addMoneyPerSecondBike += moneyPerSecondBike / 5;
    addMoneyPerSecondComputer += moneyPerSecondComputer / 5;

    //Zmiana statystyk - okulary
    gameModule.moreGlassesInfoMPS.innerHTML =
      "<b>money per secons: </b>" + moneyPerSecondGlasses.toFixed(2) + "$";

    gameModule.moreGlassesInfoTotalEarn.innerHTML =
      "<b>Total earn money: </b>" + addMoneyPerSecondGlasses.toFixed(2) + "$";

    gameModule.moreGlassesInfoSpentMoney.innerHTML =
      "<b>Money spent on at item: </b>" + moneySpentForGlasses.toFixed(2) + "$";

    //Zmiana statystyk - zegarek
    gameModule.moreWatchInfoMPS.innerHTML =
      "<b>money per secons: </b>" + moneyPerSecondWatch.toFixed(2) + "$";

    gameModule.moreWatchInfoTotalEarn.innerHTML =
      "<b>Total earn money: </b>" + addMoneyPerSecondWatch.toFixed(2) + "$";

    gameModule.moreWatchInfoSpentMoney.innerHTML =
      "<b>Money spent on at item: </b>" + moneySpentForWatch.toFixed(2) + "$";

    //Zmiana statystyk - rower
    gameModule.moreBikeInfoMPS.innerHTML =
      "<b>money per secons: </b>" + moneyPerSecondBike.toFixed(2) + "$";

    gameModule.moreBikeInfoTotalEarn.innerHTML =
      "<b>Total earn money: </b>" + addMoneyPerSecondBike.toFixed(2) + "$";

    gameModule.moreBikeInfoSpentMoney.innerHTML =
      "<b>Money spent on at item: </b>" + moneySpentForBike.toFixed(2) + "$";

    //Zmiana statystyk - zegarek
    gameModule.moreComputerInfoMPS.innerHTML =
      "<b>money per secons: </b>" + moneyPerSecondComputer.toFixed(2) + "$";

    gameModule.moreComputerInfoTotalEarn.innerHTML =
      "<b>Total earn money: </b>" + addMoneyPerSecondComputer.toFixed(2) + "$";

    gameModule.moreComputerInfoSpentMoney.innerHTML =
      "<b>Money spent on at item: </b>" +
      moneySpentForComputer.toFixed(2) +
      "$";

    //Zmiana koloru przycisku
    if (score >= glassesPrice) {
      gameModule.itemGlasses.classList.remove("red");
      gameModule.itemGlasses.classList.add("green");
    } else {
      gameModule.itemGlasses.classList.remove("green");
      gameModule.itemGlasses.classList.add("red");
    }

    if (score >= watchPrice) {
      gameModule.itemWatch.classList.remove("red");
      gameModule.itemWatch.classList.add("green");
    } else {
      gameModule.itemWatch.classList.remove("green");
      gameModule.itemWatch.classList.add("red");
    }

    if (score >= bikePrice) {
      gameModule.itemBike.classList.remove("red");
      gameModule.itemBike.classList.add("green");
    } else {
      gameModule.itemBike.classList.remove("green");
      gameModule.itemBike.classList.add("red");
    }

    if (score >= computerPrice) {
      gameModule.itemComputer.classList.remove("red");
      gameModule.itemComputer.classList.add("green");
    } else {
      gameModule.itemComputer.classList.remove("green");
      gameModule.itemComputer.classList.add("red");
    }
  }, 200);
};

//Dodawanie pieniędzy za pomocą kliknięcia w zdjęcie

gameModule.clickElement.addEventListener("click", () => {
  score += actualMoneyPerClick;
  gameModule.money.innerText = "Money: " + score.toFixed(2) + " $";
});

//Kupowanie przedmiotu - OKULARY

gameModule.itemGlasses.addEventListener("click", () => {
  if (score >= glassesPrice) {
    score -= glassesPrice;
    moneyPerSecond += 0.5;
    moneyPerSecondGlasses += 0.5;
    moneySpentForGlasses += glassesPrice;
    priceUpgrade = glassesPrice / 25;
    glassesPrice += priceUpgrade;
    gameModule.itemGlasses.innerText = glassesPrice.toFixed(0) + " $";

    //Dodawanie statystyk - OKULARY
    howManyGlasses += 1;
    gameModule.itemCountGlasses.innerText = "Owned: " + howManyGlasses;

    if (howManyGlasses >= 1) {
      gameModule.itemInfoGlasses.classList.remove("hidden");
    }
  } else {
    console.log("masz za mało pieniędzy");
  }
});

//Kupowanie przedmiotu - ZEGAREK

gameModule.itemWatch.addEventListener("click", () => {
  if (score >= watchPrice) {
    score -= watchPrice;
    moneyPerSecond += 10;
    moneyPerSecondWatch += 10;
    moneySpentForWatch += watchPrice;
    priceUpgrade = watchPrice / 25;
    watchPrice += priceUpgrade;
    gameModule.itemWatch.innerText = watchPrice.toFixed(0) + " $";

    //Dodawanie statystyk - ZEGAREK
    howManyWatch += 1;
    gameModule.itemCountWatch.innerText = "Owned: " + howManyWatch;

    if (howManyWatch >= 1) {
      gameModule.itemInfoWatch.classList.remove("hidden");
    }
  } else {
    console.log("masz za mało pieniędzy");
  }
});

//Kupowanie przedmiotu - ROWER

gameModule.itemBike.addEventListener("click", () => {
  if (score >= bikePrice) {
    score -= bikePrice;
    moneyPerSecond += 120;
    moneyPerSecondBike += 120;
    moneySpentForBike += bikePrice;
    priceUpgrade = bikePrice / 25;
    bikePrice += priceUpgrade;
    gameModule.itemBike.innerText = bikePrice.toFixed(0) + " $";

    //Dodawanie statystyk - ROWER
    howManyBike += 1;
    gameModule.itemCountBike.innerText = "Owned: " + howManyBike;

    if (howManyBike >= 1) {
      gameModule.itemInfoBike.classList.remove("hidden");
    }
  } else {
    console.log("masz za mało pieniędzy");
  }
});

//Kupowanie przedmiotu - KOMPUTER

gameModule.itemComputer.addEventListener("click", () => {
  if (score >= computerPrice) {
    score -= computerPrice;
    moneyPerSecond += 250;
    moneyPerSecondComputer += 250;
    moneySpentForComputer += computerPrice;
    priceUpgrade = computerPrice / 25;
    computerPrice += priceUpgrade;
    gameModule.itemComputer.innerText = computerPrice.toFixed(0) + " $";

    //Dodawanie statystyk - KOMPUTER
    howManyComputer += 1;
    gameModule.itemCountComputer.innerText = "Owned: " + howManyComputer;

    if (howManyComputer >= 1) {
      gameModule.itemInfoComputer.classList.remove("hidden");
    }
  } else {
    console.log("masz za mało pieniędzy");
  }
});

//Rozwijanie statystyk okuarów
gameModule.getArrow[0].addEventListener("click", () => {
  gameModule.itemInfoGlasses.classList.toggle("show-more");
  gameModule.arrow[0].classList.toggle("arrow-animation");
});

//Rozwijanie statystyk zegarka
gameModule.getArrow[1].addEventListener("click", () => {
  gameModule.itemInfoWatch.classList.toggle("show-more");
  gameModule.arrow[1].classList.toggle("arrow-animation");
});

//Rozwijanie statystyk rowera
gameModule.getArrow[2].addEventListener("click", () => {
  gameModule.itemInfoBike.classList.toggle("show-more");
  gameModule.arrow[2].classList.toggle("arrow-animation");
});

//Rozwijanie statystyk komputera
gameModule.getArrow[3].addEventListener("click", () => {
  gameModule.itemInfoComputer.classList.toggle("show-more");
  gameModule.arrow[3].classList.toggle("arrow-animation");
});
