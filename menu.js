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

// call the QUESTION function with the order options
question("Wanna have beans?(YES/NO)","beans");
question("Wanna have rice?(YES/NO)","rice");
question("Wanna have chicken?(YES/NO)","chicken");
question("Wanna have pork?(YES/NO)","pork");
question("Wanna have veggies?(YES/NO)","beans");
question("Wanna have queso?(YES/NO)","queso");
question("Wanna have lettuce?(YES/NO)","lettuce");
question("Wanna have corn?(YES/NO)","corn");
question("Wanna have sour cream?(YES/NO)","sour cream");
question("Wanna have tomato sauce?(YES/NO)","queso");
question("Wanna have guacamole?(YES/NO)","guacamole");

order= order.substring(0,order.lastIndexOf(","));

// output their order
document.write("<p>You ordered a quesadilla with: " + order + "<p>");
