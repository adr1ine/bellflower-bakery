//taste and choice variables
var sweetchoice = 0;
var saltychoice = 0;
var umamichoice = "none";
var sourchoice = 0;
var autumnchoice = "none";
var berrychoice = "none";
var tropicalchoice = "none";
var chocolatechoice = "none";
var dairychoice = "none";
var buttonchoice = 0;
var tasteoption = "none";
var foodoption = "none";
var foodvar = "";
var cartitem = "";
var x = 0;

//cart that is added to as the user makes their preference choices
var cart = [];

//functions specific to each numerical button for the sweet, salty, and sour functions
function number1(tasteoption){
  buttonchoice = 1;
  if (tasteoption == 1){
    sweet();
  }
  if (tasteoption == 2){
    salty();
  }
  if (tasteoption == 3){
    sour();
  }
}

function number2(tasteoption){
  buttonchoice = 2;
  
  if (tasteoption == 1){
    sweet();
  }
  if (tasteoption == 2){
    salty();
  }
  if (tasteoption == 3){
    sour();
  }
}

function number3(tasteoption){
  buttonchoice = 3;
  if (tasteoption == 1){
    sweet()
  }
  if (tasteoption == 2){
    salty()
  }
  if (tasteoption == 3){
    sour()
  }
}

function number4(tasteoption){
  buttonchoice = 4;
  if (tasteoption == 1){
    sweet()
  }
  if (tasteoption == 2){
    salty()
  }
  if (tasteoption == 3){
    sour()
  }
}

function number5(tasteoption){
  buttonchoice = 5;
  if (tasteoption == 1){
    sweet()
  }
  if (tasteoption == 2){
    salty()
  }
  if (tasteoption == 3){
    sour()
  }
}

function number6(tasteoption){
  buttonchoice = 6;
  if (tasteoption == 1){
    sweet()
  }
  if (tasteoption == 2){
    salty()
  }
  if (tasteoption == 3){
    sour()
  }
}

function number7(tasteoption){
  buttonchoice = 7;
  if (tasteoption == 1){
    sweet()
  }
  if (tasteoption == 2){
    salty()
  }
  if (tasteoption == 3){
    sour()
  }
}

function number8(tasteoption){
  buttonchoice = 8;
  if (tasteoption == 1){
    sweet()
  }
  if (tasteoption == 2){
    salty()
  }
  if (tasteoption == 3){
    sour()
  }
}

function number9(tasteoption){
  buttonchoice = 9;
  if (tasteoption == 1){
    sweet()
  }
  if (tasteoption == 2){
    salty()
  }
  if (tasteoption == 3){
    sour()
  }
}

function number10(tasteoption){
  buttonchoice = 10;
  if (tasteoption == 1){
    sweet()
  }
  if (tasteoption == 2){
    salty()
  }
  if (tasteoption == 3){
    sour()
  }
}

//yes and no options for the umami, autumn, berry, tropical, chocolate, and dairy choices

function yes(tasteoption){
  if (tasteoption == 4){
    umamichoice = "yes"
    cart.push("breakfast bagel", "breakfast croissant sandwich", "pepperoni & bacon bagel sandwich")
    document.getElementById("quiz").innerHTML="<h4>good to know!<br>now, from a scale of one to ten, how much are you craving something sour?</h4><center><table><thead></thead><tfoot></tfoot><tr><td><h6>not at all</h6></td><td colspan='8'></td><td><h6>very much!</h6></td></tr><tr><td><button class='numbers' onclick='number1(3)'>1</button></td><td><button class='numbers' onclick='number2(3)'>2</button></td><td><button class='numbers' onclick='number3(3)'>3</button></td><td><button class='numbers' onclick='number4(3)'>4</button></td><td><button class='numbers' onclick='number5(3)'>5</button></td><td><button class='numbers' onclick='number6(3)'>6</button></td><td><button class='numbers' onclick='number7(3)'>7</button></td><td><button class='numbers' onclick='number8(3)'>8</button></td><td><button class='numbers' onclick='number9(3)'>9</button></td><td><button class='numbers' onclick='number10(3)'>10</button></td></tr></table></center>";
  }
  if (tasteoption == 5){
    autumnchoice = "yes";
    autumn()
  }
  if (tasteoption == 6){
    berrychoice = "yes";
    berry()
  }
  if (tasteoption == 7){
    tropicalchoice = "yes";
    tropical()
  }
  if (tasteoption == 8){
    chocolatechoice = "yes";
    chocolate()
  }
  if (tasteoption == 9){
    dairychoice = "yes";
    dairy()
  }
  if (tasteoption == 10){
    buy.push(foodchoice)
  }
}

function no(tasteoption){
  if (tasteoption == 4){
    umamichoice = "no"
    document.getElementById("quiz").innerHTML="<h4>good to know!<br>now, from a scale of one to ten, how much are you craving something sour?</h4><center><table><thead></thead><tfoot></tfoot><tr><td><h6>not at all</h6></td><td colspan='8'></td><td><h6>very much!</h6></td></tr><tr><td><button class='numbers' onclick='number1(3)'>1</button></td><td><button class='numbers' onclick='number2(3)'>2</button></td><td><button class='numbers' onclick='number3(3)'>3</button></td><td><button class='numbers' onclick='number4(3)'>4</button></td><td><button class='numbers' onclick='number5(3)'>5</button></td><td><button class='numbers' onclick='number6(3)'>6</button></td><td><button class='numbers' onclick='number7(3)'>7</button></td><td><button class='numbers' onclick='number8(3)'>8</button></td><td><button class='numbers' onclick='number9(3)'>9</button></td><td><button class='numbers' onclick='number10(3)'>10</button></td></tr></table></center>";
  }
  if (tasteoption == 5){
    autumnchoice = "no";
    autumn()
  }
  if (tasteoption == 6){
    berrychoice = "no";
    berry()
  }
  if (tasteoption == 7){
    tropicalchoice = "no";
    tropical()
  }
  if (tasteoption == 8){
    chocolatechoice = "no";
    chocolate()
  }
  if (tasteoption == 9){
    dairychoice = "no";
    dairy()
  }
}

//function for the choice that the user makes for the sweet taste option
function sweet(){
  sweetchoice = buttonchoice
  //if the user does not particularly want something sweet, adds these food choices to their cart
  if(sweetchoice < 4){
    cart.push("french toast", "plain bagels", "plain croissants", "raspberry tea", "strawberry tea", "berry tea", "mint tea", "chamomile tea", "ginger tea", "black tea", "green tea", "chai tea", "citrus tea", "matcha tea", "peppermint tea");
  } 
  //if the user wants something mildly sweet, adds these food choices to their cart
  else if (sweetchoice >= 4 && sweetchoice <= 6){
    cart.push("nutella bagel", "chocolate-chip bagel", "chocolate-chip cranberry bagel", "raspberry cream cheese bagel", "blueberry bagel", "cinnamon-apple bagel", "lemon-blueberry bagel", "strawberries-n-cream bagel", "cream cheese buns", "nutella french toast", "strawberries-n-cream french toast", "cinnamon-appple french toast", "cinnamon rolls", "chocolate-filled croissants", "matcha latte", "strawberry latte", "raspberry latte", "peppermint latte", "french vanilla latte", "mocha latte", "mint chocolate-chip milkshake", "strawberry milkshake", "raspberry milkshake", "peppermint milkshake", "mocha milkshake", "raspberry boba", "chocolate milk tea boba", "carmel-apple milk tea boba", "strawberry milk tea boba");
  }
  //if the user wants something sweet, adds these food choices to their cart
  else{
    cart.push("nutella bagel", "chocolate-chip bagel", "chocolate-chip cranberry bagel", "raspberry cream cheese bagel", "blueberry bagel", "cinnamon-apple bagel", "lemon-blueberry bagel", "strawberries-n-cream bagel", "cream cheese buns", "nutella french toast", "strawberries-n-cream french toast", "cinnamon-apple french toast", "chocolate-filled croissants", "lemon scones", "chocolate scones", "chocolate-chip scones", "chocolate-chip cranberry scones", "mint chocolate-chip scones", "vanilla scones", "raspberry cream cheese scones", "blueberry scones", "cinnamon-apple scones", "lemon-blueberry scones", "strawberries-n-cream scones", "caramel-apple scones", "chocolate glazed donuts", "caramel-apple glazed donuts", "blondies", "brownies", "matcha latte", "strawberry latte", "raspberry latte", "peppermint latte", "french vanilla latte", "caramel-apple latte", "mocha latte", "chocolate milkshake", "mint chocolate-chip milkshake", "strawberry milkshake", "raspberry milkshake", "peppermint milkshake", "caramel-apple milkshake", "mocha milkshake", "raspberry boba", "chocolate milk tea boba", "caramel-apple milk tea boba", "strawberry milk tea boba");
  }
  //replaces the sweet question with one for salty
  document.getElementById("quiz").innerHTML="<h4>alright!<br>from a scale of one to ten, how much are you craving something salty?</h4><center><table><thead></thead><tfoot></tfoot><tr><td><h6>not at all</h6></td><td colspan='8'></td><td><h6>very much!</h6></td></tr><tr><td><button class='numbers' onclick='number1(2)'>1</button></td><td><button class='numbers' onclick='number2(2)'>2</button></td><td><button class='numbers' onclick='number3(2)'>3</button></td><td><button class='numbers' onclick='number4(2)'>4</button></td><td><button class='numbers' onclick='number5(2)'>5</button></td><td><button class='numbers' onclick='number6(2)'>6</button></td><td><button class='numbers' onclick='number7(2)'>7</button></td><td><button class='numbers' onclick='number8(2)'>8</button></td><td><button class='numbers' onclick='number9(2)'>9</button></td><td><button class='numbers' onclick='number10(2)'>10</button></td></tr></table></center>";
}

//function for the choice that the user makes for the saltychoice option
function salty(){
  //makes the choice that the user picked for the button to be the saltychoice
  saltychoice = buttonchoice;
  //if the user's choice was below 4, adds these items to cart
  if (saltychoice <= 4){
    cart.push("poppy-seed bagel", "sesame-seed bagel", "sunflower biscuits");
  }
  //if the user's choice was between 4 (not inclusive) and 6 (inclusive), adds these items to cart
  if (saltychoice > 4 && saltychoice <= 6){
    cart.push("cheese buns", "garlic bagel", "onion bagel", "garlic & onion bagel", "sea-salt caramel donut");  
  }
  //if the user's choice was above 6 (not inclusive), adds these items to cart
  else{
    cart.push("cheesy garlic bread", "garlic bagel", "onion bagel", "garlic & onion bagel", "cheddar-cheese puffs");
    //if the user also wanted something sweet and had a high salty preference, adds something both salty and sweet to their cart
    if (sweetchoice >= 6){
      cart.push("salted-caramel brownies");
    }
  }
  //if the user had a very high salty choice, asks if they want something umami as well
  if (saltychoice >= 7){
    document.getElementById("quiz").innerHTML="<h4>hmm, you said you wanted something salty?<br>do you want a possible option to be something with a umami flavor, then?</h4><br><br><button class='yesno' onclick='yes(4)'>yes</button><button class='yesno' onclick='no(4)'>no</button>";
  }
    //otherwise, replaces the salty question onto the sour question and buttons
  else{
    document.getElementById("quiz").innerHTML="<h4>good to know!<br>now, from a scale of one to ten, how much are you craving something sour?</h4><center><table><thead></thead><tfoot></tfoot><tr><td><h6>not at all</h6></td><td colspan='8'></td><td><h6>very much!</h6></td></tr><tr><td><button class='numbers' onclick='number1(3)'>1</button></td><td><button class='numbers' onclick='number2(3)'>2</button></td><td><button class='numbers' onclick='number3(3)'>3</button></td><td><button class='numbers' onclick='number4(3)'>4</button></td><td><button class='numbers' onclick='number5(3)'>5</button></td><td><button class='numbers' onclick='number6(3)'>6</button></td><td><button class='numbers' onclick='number7(3)'>7</button></td><td><button class='numbers' onclick='number8(3)'>8</button></td><td><button class='numbers' onclick='number9(3)'>9</button></td><td><button class='numbers' onclick='number10(3)'>10</button></td></tr></table></center>";
  }
}

//function for the choice that the user makes for the sour taste option
function sour(){
  sourchoice = buttonchoice;
  //if the sour choice is higher than average, adds sour drinks to cart
  if (sourchoice >= 5){
    cart.push("orange juice", "passionfruit tea", "lemonade", "pink lemonade")
  }
  //replaces the sour question with the autumn question and buttons
  document.getElementById("quiz").innerHTML="<h4>do you want a possible option to be something with a flavor typically associated with autumn?<br>(think cinnamon apple, pumpkin spice and whatnot!)</h4><br><br><button class='yesno' onclick='yes(5)'>yes</button><button class='yesno' onclick='no(5)'>no</button>";
}

//function for the choice that the user makes for autumn flavors
function autumn(){
  //if the user says that they do not want autumn flavored things, then removes thins with autumnal flavors
  if (autumnchoice == "no"){
    cart = cart.filter(e => e !== "cinnamon-apple bagel")
    cart = cart.filter(e => e !== "caramel-apple milk tea boba")
    cart = cart.filter(e => e !== "caramel-apple milkshake")
    cart = cart.filter(e => e !== "caramel-apple latte")
    cart = cart.filter(e => e !== "caramel-apple glazed donuts")
    cart = cart.filter(e => e !== "caramel-apple scones")
    cart = cart.filter(e => e !== "cinnamon-apple scones")
    cart = cart.filter(e => e !== "cinnamon-apple french toast")
  }
  //if the user wants an autumn-flavored thing, adds an autumnal drink
  if (autumnchoice == "yes"){
    cart.push("pumpkin-spice latte")
  }
  //replaces the autumnal question with a berry flavor question
  document.getElementById("quiz").innerHTML="<h4>and next:<br>do you want anything with berries in it or with berry flavors?</h4><br><br><button class='yesno' onclick='yes(6)'>yes</button><button class='yesno' onclick='no(6)'>no</button>";
}

//function for the choice that the user makes for the berry flavor option
function berry(){
  //if the user said that they don't want berry flavored things, then removes berry flavored things from the cart
  if (berrychoice == "no"){
    cart = cart.filter(e => e !== "raspberry cream cheese bagel")
    cart = cart.filter(e => e !== "raspberry cream cheese scones")
    cart = cart.filter(e => e !== "strawberry milk tea boba")
    cart = cart.filter(e => e !== "strawberry milkshake")
    cart = cart.filter(e => e !== "strawberry latte")
    cart = cart.filter(e => e !== "raspberry boba")
    cart = cart.filter(e => e !== "raspberry milkshake")
    cart = cart.filter(e => e !== "raspberry latte")
    cart = cart.filter(e => e !== "blueberry bagel")
    cart = cart.filter(e => e !== "lemon-blueberry scones")
    cart = cart.filter(e => e !== "blueberry scones")
    cart = cart.filter(e => e !== "lemon-blueberry bagel")
    cart = cart.filter(e => e !== "chocolate-chip cranberry bagel")
    cart = cart.filter(e => e !== "chocolate-chip cranberry scones")
    cart = cart.filter(e => e !== "berry tea")
    cart = cart.filter(e => e !== "strawberry tea")
    cart = cart.filter(e => e !== "raspberry tea")
    cart = cart.filter(e => e !== "strawberries-n-cream bagel")
    cart = cart.filter(e => e !== "strawberries-n-cream french toast")
    cart = cart.filter(e => e !== "strawberries-n-cream scones")
  }
    //replaces the berry question with a tropical flavor question
  document.getElementById("quiz").innerHTML="<h4>speaking of fruity flavors,<br>do you want a possible choice to be tropical flavored?</h4><br><br><button class='yesno' onclick='yes(7)'>yes</button><button class='yesno' onclick='no(7)'>no</button>";
}

//function for the choice that the user makes for the tropical flavors option
function tropical(){
  //if the user said that they don't want tropical flavored things, then removes tropical flavored things from the cart
  if (tropicalchoice == "no"){
    cart = cart.filter(e => e !== "citrus tea")
    cart = cart.filter(e => e !== "orange juice")
    cart = cart.filter(e => e !== "passionfruit tea")
  }
    //replaces the tropical question with a chocolate flavor question
  document.getElementById("quiz").innerHTML="<h4>what about chocolate-y flavors?<br>would you be okay if they were a possible option?</h4><br><br><button class='yesno' onclick='yes(8)'>yes</button><button class='yesno' onclick='no(8)'>no</button>";
}

//function for the choice that the user makes for the chocolate flavors option
function chocolate(){
  //if the user said that they don't want chocolate flavored things, then removes chocolate flavored things from the cart
  if (chocolatechoice == "no"){
    cart = cart.filter(e => e !== "chocolate-chip bagel")
    cart = cart.filter(e => e !== "chocolate-chip cranberry bagel")
    cart = cart.filter(e => e !== "chocolate-filled croissants")
    cart = cart.filter(e => e !== "nutella french toast")
    cart = cart.filter(e => e !== "chocolate milkshake")
    cart = cart.filter(e => e !== "mint chocolate-chip milkshake")
    cart = cart.filter(e => e !== "nutella bagel")
    cart = cart.filter(e => e !== "chocolate milk tea boba")
    cart = cart.filter(e => e !== "chocolate scones")
    cart = cart.filter(e => e !== "chocolate")
    cart = cart.filter(e => e !== "chocolate-chip scones")
    cart = cart.filter(e => e !== "chocolate-chip cranberry scones")
    cart = cart.filter(e => e !== "mint chocolate-chip scones")
    cart = cart.filter(e => e !== "chocolate glazed donuts")
    cart = cart.filter(e => e !== "brownies")
    cart = cart.filter(e => e !== "salted-caramel brownies")
  }
    //replaces the chocolate question with a dairy items question
  document.getElementById("quiz").innerHTML="<h4>speaking of chocolate: what better to go with chocolate-y items than milk?<br>would you be okay if possible choices were dairy items?</h4><br><br><button class='yesno' onclick='yes(9)'>yes</button><button class='yesno' onclick='no(9)'>no</button>";
}

//function for the choice that the user makes for foods containing dairy
function dairy(){
  //if the user said that they don't want dairy items, then removes items containing dairy from the cart
  if (dairychoice == "no"){
    cart = cart.filter(e => e !== "matcha latte")
    cart = cart.filter(e => e !== "strawberry latte")
    cart = cart.filter(e => e !== "raspberry latte")
    cart = cart.filter(e => e !== "peppermint latte")
    cart = cart.filter(e => e !== "french vanilla latte")
    cart = cart.filter(e => e !== "caramel-apple latte")
    cart = cart.filter(e => e !== "mocha latte")
    cart = cart.filter(e => e !== "chocolate milkshake")
    cart = cart.filter(e => e !== "mint chocolate-chip milkshake")
    cart = cart.filter(e => e !== "strawberry milkshake")
    cart = cart.filter(e => e !== "raspberry milkshake")
    cart = cart.filter(e => e !== "peppermint milkshake")
    cart = cart.filter(e => e !== "caramel-apple milkshake")
    cart = cart.filter(e => e !== "mocha milkshake")
    cart = cart.filter(e => e !== "raspberry boba")
    cart = cart.filter(e => e !== "chocolate milk tea boba")
    cart = cart.filter(e => e !== "caramel-apple milk tea boba")
    cart = cart.filter(e => e !== "strawberry milk tea boba")
    cart = cart.filter(e => e !== "chedddar-cheese puffs")
    cart = cart.filter(e => e !== "cheesy garlic bread")
    cart = cart.filter(e => e !== "cheese buns")
    cart = cart.filter(e => e !== "raspberry cream cheese bagel")
    cart = cart.filter(e => e !== "raspberry cream cheese scones")
    cart = cart.filter(e => e !== "cream cheese buns")
    cart = cart.filter(e => e !== "strawberries-n-cream bagel")
    cart = cart.filter(e => e !== "strawberries-n-cream scones")
    cart = cart.filter(e => e !== "pumpkin-spice latte")
  }
  //displays a button that when clicked, brings the user to their results
  document.getElementById("quiz").innerHTML="<h4>okay then!<br>we have your personalized choices!</h4><br><br><button class='yesno' style='width: 250px;' onclick='results(foodvar)'>click to see your results!</button>";
}

//results function
function results(foodchoice){
  //while i is less than the amount of items in the cart, adds items in cart to variable
  for (i = 0; i < cart.length; i++){
    cartitem = cart[i]
    foodchoice = foodchoice + "<button class='bchoice'>" + cartitem + "</button>";
    if (i % 5 == 0){
      foodchoice = foodchoice + "<br><br>";
    }
  }
  //displays the cart items as well as a button that reloads the page to retake the quiz
  document.getElementById("quiz").innerHTML="<b><h4>here are some bellflower bakery items that we think you might like!</b><br><br>" + foodchoice + "<br><br><br><br>thank you so much for taking our quiz, by the way!<br>to order one of these items, please go to a bellflower bakery near you!<br><br>we hope you enjoyed!<br><br><button onclick='retake()'>retake quiz!</button></h4>";
}

//quiz retake function
function retake(){
  window.location.href="quiz.html"
}