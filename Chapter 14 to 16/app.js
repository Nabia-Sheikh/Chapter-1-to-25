// Question:01
function q1() {
  var q1 = [];
  document.getElementById("Q1").innerHTML = "var q1 = [];";
}

// Question:02
function q2() {
  var q2 = new Array();
  document.getElementById("Q2").innerHTML = "var q2 = new Array();";
}

// Question:03
function q3() {
  var q3 = ["rose", "jasmine", "tulip"];
  document.getElementById("Q3").innerHTML =
    `var q3 = ["rose" , "jasmine" , "tulip"];` + "<hr>";
}
function p3() {
  var p3 = ["rose", "jasmine", "tulip"];
  for (var i = 0; i < p3.length; i++) {
    document.getElementById("out3").innerHTML = "Output:";
    document.getElementById("P3").innerHTML += p3[i] + "<br>";
  }
  document.getElementById("btn3").onclick = "";
}

// Question 4
function q4() {
  var q4 = [10, 20, 30, 40];
  document.getElementById("Q4").innerHTML =
    "var q4 = [10, 20, 30, 40];" + "<hr>";
}
function p4() {
  var p4 = [10, 20, 30, 40];
  for (var i = 0; i < p4.length; i++) {
    document.getElementById("out4").innerHTML = "Output:";
    document.getElementById("P4").innerHTML += p4[i] + "<br>";
  }
  document.getElementById("btn4").onclick = "";
}

// Question 5
function q5() {
  var q5 = [true, false, false, true];
  document.getElementById("Q5").innerHTML =
    "var q5 = [true , false , false , true ];" + "<hr>";
}
function p5() {
  var p5 = [true, false, false, true];
  for (var i = 0; i < p5.length; i++) {
    document.getElementById("out5").innerHTML = "Output";
    document.getElementById("P5").innerHTML += p5[i] + "<br>";
  }
  document.getElementById("btn5").onclick = "";
}

// Question 6
function q6() {
  var arr = ["mon", "tues", "wed"];
  var q6 = [true, false, "Ali", 6, arr[2]];
  document.getElementById("Q6").innerHTML =
    `var q6 = [true , false , "Ali" , 6 , arr[2] ];` + "<hr>";
}
function p6() {
  var arr = ["mon", "tues", "wed"];
  var p6 = [true, false, "Ali", 6, arr[2]];
  for (var i = 0; i < p6.length; i++) {
    document.getElementById("out6").innerHTML = "Output:";
    document.getElementById("P6").innerHTML += p6[i] + "<br>";
  }
  document.getElementById("btn6").onclick = "";
}

// Question 7
function q7() {
  var q7 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
  document.getElementById("Q7").innerHTML =
    `var q7 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];` +
    "<hr>";
}
function p7() {
  var p7 = [
    "1)SSC",
    "2)HSC",
    "3)BCS",
    "4)BS",
    "5)BCOM",
    "6)MS",
    "7)M. Phil.",
    "8)PhD",
  ];
  for (var i = 0; i < p7.length; i++) {
    document.getElementById("out7").innerHTML = "Qualifications:";
    document.getElementById("P7").innerHTML += p7[i] + "<br>";
  }
  document.getElementById("btn7").onclick = "";
}

// Question 8
function q8() {
  document.getElementById(
    "Q8"
  ).innerHTML = ` var studentNames = ["Michael", "John", "Tony"];  <br> var studentMarks = [320, 230, 480]; <br>
    var totalMarks = 500;`;
}
function p8() {
  var studentNames = ["Michael", "John", "Tony"];
  var studentMarks = [320, 230, 480];
  var totalMarks = 500;
  for (var i = 0; i < studentNames.length; i++) {
    document.getElementById("P8").innerHTML +=
      "Score of " +
      studentNames[i] +
      " is " +
      studentMarks[i] +
      ".Percentage : " +
      (studentMarks[i] / 500) * 100 +
      "%" +
      "<br>";
  }
  document.getElementById("out8").innerHTML = "Output:";
  document.getElementById("P8").innerHTML += "<hr>";
  document.getElementById("btn8").onclick = "";
}

// Question 9
function p9() {
  var colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Peach"];
  document.getElementById("q9names").innerHTML = colorNames;
}
function p9a() {
  var colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Peach"];

  var user1 = prompt(
    ` Enter the color Name(From list)  you want to add to the beginnig `
  );

  for (var i = 0; i < colorNames.length; i++) {
    if (colorNames[i] === user1) {
      colorNames.splice(i, i);
    }
  }
  colorNames.unshift(user1);
  document.getElementById("P9a").innerHTML += colorNames;
  document.getElementById("P9a").innerHTML += "<hr>";
  document.getElementById("btn9a").onclick = "";
}

function p9b() {
  var colorNamesb = ["Red", "Green", "Blue", "Yellow", "Purple", "Peach"];

  var user2 = prompt(
    `  Enter the color Name(From list)  you want to show in the end `
  );

  for (var i = 0; i < colorNamesb.length; i++) {
    if (colorNamesb[i] === user2) {
      colorNamesb.splice(i, i);
    }
  }
  colorNamesb.push(user2);
  document.getElementById("partB").innerHTML += colorNamesb;
  document.getElementById("partB").innerHTML += "<hr>";
  document.getElementById("btn9b").onclick = "";
}

function p9c() {
  var colorNamesc = ["Red", "Green", "Blue", "Yellow", "Purple", "Peach"];

  var user3 = prompt(
    `  Enter the first Color you want to add in the beginning `
  );
  var user3a = prompt(
    `  Enter the second Color you want to add in the beginning `
  );

  colorNamesc.unshift(user3, user3a);
  document.getElementById("partC").innerHTML += colorNamesc;
  document.getElementById("partC").innerHTML += "<hr>";
  document.getElementById("btn9c").onclick = "";
}

function p9d() {
  var colorNamesd = ["Red", "Green", "Blue", "Yellow", "Purple", "Peach"];

  colorNamesd.shift();
  document.getElementById("partD").innerHTML += colorNamesd;
  document.getElementById("partD").innerHTML += "<hr>";
  document.getElementById("btn9d").onclick = "";
}

function p9e() {
  var colorNamese = ["Red", "Green", "Blue", "Yellow", "Purple", "Peach"];

  colorNamese.pop();
  document.getElementById("partE").innerHTML += colorNamese;
  document.getElementById("partE").innerHTML += "<hr>";
  document.getElementById("btn9e").onclick = "";
}

function p9f() {
  var colorNamesf = ["Red", "Green", "Blue", "Yellow", "Purple", "Peach"];
  var indexColor = parseInt(
    prompt("Enter the Index where you want to add the color")
  );
  var newColorName = prompt("Enter the color Name you want to add");

  colorNamesf.splice(indexColor, 0, newColorName);
  document.getElementById("partF").innerHTML += colorNamesf;
  document.getElementById("partF").innerHTML += "<hr>";
  document.getElementById("btn9f").onclick = "";
}

function p9g() {
  var colorNamesg = ["Red", "Green", "Blue", "Yellow", "Purple", "Peach"];
  var colorsToDelete = parseInt(prompt("How many colors you want to Delete?"));
  var deleteColorPos = parseInt(
    prompt("From which index you want to delete color?")
  );

  colorNamesg.splice(deleteColorPos, colorsToDelete);
  document.getElementById("partG").innerHTML += colorNamesg;
  document.getElementById("partG").innerHTML += "<hr>";
  document.getElementById("btn9g").onclick = "";
}

// Question 10
function q10() {
  var q10 = [320, 230, 480, 120];
  document.getElementById("score").innerHTML = "Score of Students:";
  document.getElementById("Q10").innerHTML = q10 + "<hr>";
}
function p10() {
  var p10 = [320, 230, 480, 120];
  document.getElementById("out10").innerHTML = "Ordered Scores Of Students:";
  document.getElementById("P10").innerHTML = p10.sort();
}

// Question 11
function q11() {
  var q11 = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
  document.getElementById("Original").innerHTML = "Cities List:";
  document.getElementById("Q11").innerHTML = q11 + "<br> <hr>";
}
function p11() {
  var q11 = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
  var copy = q11.slice(2, 4);
  document.getElementById("out11").innerHTML = "Selected Cities List:";
  document.getElementById("P11").innerHTML = copy;
}
// Question 12
function q12() {
  var q12 = ["This", "is", "my", "cat", "."];

  document.getElementById("array").innerHTML = "Array:";
  document.getElementById("Q12").innerHTML = q12 + "<hr>";
}
function p12() {
  var q12 = ["This", "is", "my", "cat", "."];
  document.getElementById("out12").innerHTML = "String:";
  document.getElementById("P12").innerHTML = q12.join(" ");
}

// Question 13
function q13() {
  var q13 = ["Keyboard", "Mouse", "Printer", "Monitor"];

  document.getElementById("out13").innerHTML = "Devices:";
  document.getElementById("Q13").innerHTML = q13 + "<hr>";
}
function p13() {
  var p13 = ["Keyboard", "Mouse", "Printer", "Monitor"];
  for (let i = 0; i < p13.length; i++) {
    document.getElementById("P13").innerHTML += "<h3>Out:</h3>" + p13[i];
  }
  document.getElementById("btn13").onclick = "";
}

// Question 14
function q14() {
  var q14 = ["Keyboard", "Mouse", "Printer", "Monitor"];

  document.getElementById("out14").innerHTML = "Devices:";
  document.getElementById("Q14").innerHTML = q14 + "<hr>";
}
function p14() {
  var p14 = ["Keyboard", "Mouse", "Printer", "Monitor"];
  p14.reverse();
  for (let i = 0; i < p14.length; i++) {
    document.getElementById("P14").innerHTML += "<h3>Out:</h3>" + p14[i];
  }
  document.getElementById("btn14").onclick = "";
}

// Question 15
function q15() {
  document.getElementById("dropdown").style.display = "block";
  var q15 = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
  var dropDown = document.getElementById("dropdown");
  for (let i = 0; i < q15.length; i++) {
    var data = q15[i];
    var element = document.createElement("option");
    element.textContent = data;
    element.value = data;
    dropDown.appendChild(element);
  }
  document.getElementById("btn15").onclick = "";
}

// user-defined table
function userTable() {
  var num = parseInt(prompt("Enter Table Number"));
  for (var i = 1; i <= 10; i++) {
    document.getElementById("userTable").innerHTML +=
      num + " x " + i + " = " + num * i + "<br>";
  }
  document.getElementById("userTableBtn").onclick = "";
}

// Hard coded table
function hardTable() {
  for (var i = 1; i <= 10; i++) {
    document.getElementById("hardTable").innerHTML +=
      "2 x " + i + " = " + 2 * i + "<br>";
  }
  document.getElementById("tableBtn").onclick = "";
}
