// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText, type) {
  // your code goes here
  var option = prompt(questionText);
  if(option.toUpperCase()== "YES"){
    order+= type + ",";
  }
}

var questions= [
"Wanna have beans?(YES/NO)",
"Wanna have rice?(YES/NO)",
"Wanna have chicken?(YES/NO)",
"Wanna have pork?(YES/NO)",
"Wanna have veggies?(YES/NO)",
"Wanna have queso?(YES/NO)",
"Wanna have lettuce?(YES/NO)",
"Wanna have corn?(YES/NO)",
"Wanna have sour cream?(YES/NO)",
"Wanna have tomato sauce?(YES/NO)",
"Wanna have guacamole?(YES/NO)"
];

var answers= [
"beans",
"rice",
"chicken",
"pork",
"veggies",
"queso",
"lettuce",
"corn",
"sour cream",
"tomato souce",
"guacamole"
];

var i=0;

while (i<questions.length){
	question(questions[i], answers[i]);
    i++;
}

order= order.substring(0,order.lastIndexOf(","));

// output their order
document.write("<p>You ordered a quesadilla with: " + order + "<p>");
