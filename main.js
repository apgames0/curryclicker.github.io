var curry = 0;
var stoves = 0;
var grandmas = 0;
var restaurants = 0;
var factories = 0;
var countries = 0;
var beastlyyy = 0;
var message = false;
 document.getElementById('CHEATER').style.display = 'none';
function cheater() {

  document.getElementById('CHEATER').style.display = 'block';
  
}


function MRBEASTMODE() {
	   var beastycost = 10000000
    if(curry >= beastycost) {
curry - beastycost
ragu.src = "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"

document.body.style.backgroundColor = "lightblue";

}
}

function curryClick(number) {
    curry = curry + number;
    document.getElementById("curry").innerHTML = comma(curry);
    document.title = comma(curry) + " | CurryClicker";
}


function buyStove() {
    var stoveCost = Math.floor(10 * Math.pow(1.15,stoves));
    if(curry >= stoveCost) {
        stoves = stoves + 1;
    	  curry = curry - stoveCost;
        document.getElementById('stoves').innerHTML = stoves;
        document.getElementById('curry').innerHTML = comma(curry);
    } else {
        error();
    }
    var nextCost = Math.floor(10 * Math.pow(1.15,stoves));
    document.getElementById('stoveCost').innerHTML = nextCost;
}

function buyGrandma() {
    var grandmaCost = Math.floor(100 * Math.pow(1.15,grandmas));
    if(curry >= grandmaCost) {
        grandmas = grandmas + 1;
    	  curry = curry - grandmaCost;
        document.getElementById('grandmas').innerHTML = grandmas;
        document.getElementById('curry').innerHTML = comma(curry);
    } else {
        error();
    }
    var nextCost = Math.floor(100 * Math.pow(1.15,grandmas));
    document.getElementById('grandmaCost').innerHTML = nextCost;
}

function buyRestaurant() {
    var restaurantCost = Math.floor(1000 * Math.pow(1.15,restaurants));
    if(curry >= restaurantCost) {
        restaurants = restaurants + 1;
    	  curry = curry - restaurantCost;
        document.getElementById('restaurants').innerHTML = restaurants;
        document.getElementById('curry').innerHTML = comma(curry);
    } else {
        error();
    }
    var nextCost = Math.floor(1000 * Math.pow(1.15,restaurants));
    document.getElementById('restaurantCost').innerHTML = nextCost;
}

function buycountry() {

    var countryCost = Math.floor(100000 * Math.pow(1.15,countries));
    if(curry >= countryCost) {
        countries = countries + 1;
    	  curry = curry - countryCost;
        document.getElementById('countries').innerHTML = countries;
        document.getElementById('curry').innerHTML = comma(curry);
    } else {
        error();
    }
    var nextCost = Math.floor(100000 * Math.pow(1.15,factories));
    document.getElementById('countryCost').innerHTML = nextCost;
}


function buyFactory() {
    var factoryCost = Math.floor(10000 * Math.pow(1.15,factories));
    if(curry >= factoryCost) {
        factories = factories + 1;
    	  curry = curry - factoryCost;
        document.getElementById('factories').innerHTML = factories;
        document.getElementById('curry').innerHTML = comma(curry);
    } else {
        error();
    }
    var nextCost = Math.floor(10000 * Math.pow(1.15,factories));
    document.getElementById('factoryCost').innerHTML = nextCost;
}

function setCurry() {
    var setAmount = parseInt(document.getElementById('SetAmount').value, 10);
    
        curry  = setAmount
  cheater()
    
}

function betCurry() {
    var betAmount = parseInt(document.getElementById('betAmount').value, 10);
    if(curry >= betAmount) {
      var betNumber = Math.floor((Math.random() * 100) + 1);
      if (betNumber > 50) {
        curry  = curry + betAmount;
        document.getElementById('result').innerHTML = "You win " + comma(betAmount) + " curry.";
      } else {
        curry = curry - betAmount;
        document.getElementById('result').innerHTML = "You lose " + comma(betAmount) + " curry.";
      }
      document.getElementById("curry").innerHTML = comma(curry);
      document.title = comma(curry) + " | CurryClicker";
    } else {
        error();
    }
}

function error() {
  if (!message) {
  message = true;
  document.getElementById('msg').style.display = 'block';
  window.setTimeout(function() {
    message = false;
    document.getElementById('msg').style.display = 'none';
  }, 3000);
  }
}

window.setInterval(function() {
	var amount = (stoves * 0.1) + grandmas + (restaurants * 10) + (factories * 100) + (countries * 1000);
	curryClick(amount);
  document.getElementById('sec').innerHTML = amount.toFixed(1) + " curry/s"
	document.title = comma(curry) + ' | CurryClicker';
}, 1000);

window.setInterval(function() {
  var comments = ["Keep making that curry!", "Yum, yum!", "Do the bakrichod!", "You're my habibi!", "Serving India with fresh curry since 1996!", "You fat bastard!", "I am the best tech support. Period.", "You can never get enough curry!"];
  var comment = comments[Math.floor(Math.random()*comments.length)];
  document.getElementById('comment').innerHTML = comment;
}, 10000);


function comma(x) {
    return x.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}