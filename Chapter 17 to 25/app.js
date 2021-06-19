function q1() {
  var q1 = [[]];
  document.getElementById("q1").innerHTML = " var q1 = [ [ ] ] ";
}

function q2q() {
  document.getElementById("q2q").innerHTML =
    " var q2 = [[ 0 ,1 , 2 , 3  ] [ 1 , 0  , 1 , 2 ] [2, 1 ,0 , 1]  ]; ";
}

function q2a() {
  var q2 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
  ];
  for (var i = 0; i < q2.length; i++) {
    var innerArray = q2[i].length;
    for (var j = 0; j < innerArray; j++) {
      document.getElementById("q2a").innerHTML += " " + q2[i][j];
    }

    document.getElementById("q2a").innerHTML += "<br>";
  }
}

function q3q() {
  document.getElementById(
    "q3q"
  ).innerHTML = `  for (var i = 0; i <= 10; i++) <br>
    { <br>
        document.getElementById('q3a').innerHTML += i ; <br>
    } <hr>  `;
}

function q3a() {
  for (var i = 0; i <= 10; i++) {
    document.getElementById("q3a").innerHTML += i + "<br>";
  }
}

function q4q() {
  document.getElementById("q4q").innerHTML = ` 
     var a = parseInt(prompt("Enter a number to show its multiplication table")); <br>
    var b = parseInt(prompt("Enter length multiplication table")); <br> 
    document.getElementById('q4a').innerHTML = "Multiplication table of " + a + " Length " + b + "; <br>
    for (var i = 1; i <= b; i++) <br>
    { <br>
        document.getElementById('q4a').innerHTML += a + " x " + i + " = " + (a * i) + ""; <br>
    } <br>
    <hr>  `;
}

function q4a() {
  var a = parseInt(prompt("Enter a number to show its multiplication table"));
  var b = parseInt(prompt("Enter length multiplication table"));
  document.getElementById("q4a").innerHTML =
    "<b> Multiplication table of " + a + "<br> Length " + b + " </b> <br> <br>";
  for (var i = 1; i <= b; i++) {
    document.getElementById("q4a").innerHTML +=
      a + " x " + i + " = " + a * i + "<br>";
  }
}

function q5q() {
  document.getElementById("q5q").innerHTML = ` 
      var fruits = ["apple", "banana", "mango", "orange", "strawberry"]; <br>
    for (var i = 0; i < fruits.length; i++) <br>
    { <br>
        document.getElementById('q5a').innerHTML += fruits[i] ; <br>
    } <br>

        for (var i = 0; i < fruits.length; i++) <br>
    { <br>
        document.getElementById('q5a').innerHTML +="Element at index " + i + " is " + fruits[i] ; <br>
    } <br>
    <hr>  `;
  document.getElementById("btn5q").onclick = "";
}

function q5a() {
  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
  for (var i = 0; i < fruits.length; i++) {
    document.getElementById("q5a").innerHTML += fruits[i] + "<br>";
  }
  document.getElementById("q5a").innerHTML += "<br>";

  for (var i = 0; i < fruits.length; i++) {
    document.getElementById("q5a").innerHTML +=
      "Element at index " + i + " is " + fruits[i] + "<br>";
  }
  document.getElementById("btn5a").onclick = "";
}

function q6a() {
  document.getElementById("q6a").innerHTML =
    "<strong> Counting: </strong> <br>";
  for (var i = 1; i < 16; i++) {
    document.getElementById("q6a").innerHTML += i + ",";
  }
  document.getElementById("q6a").innerHTML +=
    " <br> <strong> Reverse Counting: </strong> <br>";
  for (var i = 10; i >= 1; i--) {
    document.getElementById("q6a").innerHTML += i + ",";
  }
  document.getElementById("q6a").innerHTML +=
    " <br> <strong> Even: </strong> <br>";
  for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      document.getElementById("q6a").innerHTML += i + ",";
    }
  }
  document.getElementById("q6a").innerHTML +=
    " <br> <strong> Odd: </strong> <br>";
  for (var i = 0; i <= 20; i++) {
    if (i % 2 == 1) {
      document.getElementById("q6a").innerHTML += i + ",";
    }
  }
  document.getElementById("q6a").innerHTML +=
    " <br> <strong> Series: </strong> <br>";
  for (var i = 0; i <= 20; i++) {
    if (i == 0) {
      continue;
    }
    if (i % 2 == 0) {
      document.getElementById("q6a").innerHTML += i + "k,";
    }
  }

  document.getElementById("btn6a").onclick = "";
}

function q7a() {
  var q7 = ["cake", "apple pie", "cookie", "chips", "patties"];
  var userSearch = prompt(
    "Welcome to ABC Bakery. What do you want to order sir/Ma'am?"
  );
  userSearch = userSearch.toLowerCase();
  for (var i = 0; i <= q7.length; i++) {
    if (q7[i] === userSearch) {
      document.getElementById("q7a").innerHTML =
        userSearch + " is <b>available</b> at index " + i + " in our bakery";
      break;
    } else {
      document.getElementById("q7a").innerHTML =
        "We are sorry. " +
        userSearch +
        " is <b>not available</b> in our bakery";
    }
  }
}

function q8a() {
  var q8 = [24, 53, 78, 91, 12];
  var largest = 0;
  var q8p = document.getElementById("q8a");
  for (i = 0; i <= largest; i++) {
    if (q8[i] > largest) {
      largest = q8[i];
    }
  }
  q8p.innerHTML = "Array Items: " + q8.toString();
  q8p.innerHTML += "<br> The largest number is " + largest;
}

function q9a() {
  var q9 = [24, 53, 78, 91, 12];
  var smallest = q9[0];
  var q9p = document.getElementById("q9a");
  for (i = 0; i <= smallest; i++) {
    if (q9[i] < smallest) {
      smallest = q9[i];
    }
  }
  q9p.innerHTML = "Array Items: " + q9.toString();
  q9p.innerHTML += "<br> The smallest number is " + smallest;
}

function q10a() {
  for (var i = 1; i <= 20; i++) {
    document.getElementById("q10a").innerHTML += 5 * i + " ,";
  }
}

function q1b() {
  var fName = prompt("Enter your first name");
  var lName = prompt("Enter your last name");
  var fullName = fName + " " + lName;
  alert("Welcome " + fullName);
}

function q2b() {
  var q2b = prompt("Enter your favorite mobile phone model");
  var q2binput = q2b.length;
  document.getElementById("q2b").innerHTML =
    "My favorite phone is : " + q2b + "<br>Length of String : " + q2binput;
}

function q3b() {
  var text = "Pakistani";
  var indexofN = text.indexOf("n");
  document.getElementById("q3b").innerHTML =
    "String : " + text + "<br> Index of 'n' : " + indexofN;
}

function q4b() {
  var Text = "Hello World";
  var indexofText = Text.lastIndexOf("l");
  document.getElementById("q4b").innerHTML =
    "String : " + Text + "<br>Last Index of 'l' : " + indexofText;
}

function q5b() {
  var q5b = "Pakistani";
  var charCheck = q5b.charAt(3);
  document.getElementById("q5b").innerHTML =
    "String : " + q5b + "<br>Character at Index '3' : " + charCheck;
}

function q6b() {
  var firName = prompt("Enter your first name");
  var lasName = prompt("Enter your last name");
  var FullName = firName.concat(lasName);
  alert("Welcome " + FullName);
}

function q7b() {
  var q7b = "Hyderabad";
  var replaced = q7b.replace("Hyder", "Islam");
  document.getElementById("q7b").innerHTML =
    "City: " + q7b + "<br> After replacement: " + replaced;
}

function q8b() {
  var q8b =
    "Ali and Sami are best friends. They play cricket and football together";
  var replace = q8b.replace(/and/g, "&");
  document.getElementById("q8b").innerHTML = replace;
}

function q9b() {
  var str = "472";
  var num = parseInt(str);
  document.getElementById("q9b").innerHTML =
    "Value: " +
    str +
    "<br>Type: " +
    typeof str +
    "<br>Value: " +
    num +
    "<br>Type: " +
    typeof num;
}

function q10b() {
  var q10b = prompt("Enter your favorite Flower name");
  var uprCase = q10b.toUpperCase();
  document.getElementById("q10b").innerHTML =
    "User Input: " + q10b + "<br>Upper Case: " + uprCase;
}

function q11b() {
  var q11b = prompt("Enter your favorite Programming language");
  var firChar = q11b.charAt(0).toUpperCase() + q11b.slice(1).toLowerCase();
  document.getElementById("q11b").innerHTML =
    "User Input: " + q11b + "<br>Title Case: " + firChar;
}

function q12b() {
  var numFlt = 35.37;
  var Str = numFlt.toString();
  Str = Str.replace(".", "");
  document.getElementById("q12b").innerHTML =
    "Number: " + numFlt + "<br>Result: " + Str;
}

function q13b() {
  var q13b = prompt("Enter your username");
  var checkForNull = 0;
  var wehnNull = q13b.length + 1;
  for (var i = 0; i < wehnNull; i++) {
    if (q13b.length > 0) {
      if (
        q13b.includes(String.fromCharCode(64)) ||
        q13b.includes(String.fromCharCode(33)) ||
        q13b.includes(String.fromCharCode(44)) ||
        q13b.includes(String.fromCharCode(46))
      ) {
        q13b = prompt("Please enter a valid username");
        i = -1;
        continue;
      } else {
        document.getElementById("q13b").innerHTML =
          "<h1> You enter a valid username </h1>";
        break;
      }
    } else if (q13b.length == checkForNull) {
      q13b = prompt("Please enter a valid username");
      i = -1;
    }
  }
}

function q14b() {
  var q14b = ["cake", "apple pie", "cookie", "chips", "patties"];
  var Searchuser = prompt(
    "Welcome to ABC Bakery. What do you want to order sir/Ma'am?"
  );
  Searchuser = Searchuser.toLowerCase();
  for (var i = 0; i <= q14b.length; i++) {
    if (q14b[i] === Searchuser) {
      document.getElementById("q14b").innerHTML =
        Searchuser + " is <b>available</b> at index " + i + " in our bakery";
      break;
    } else {
      document.getElementById("q14b").innerHTML =
        "We are sorry. " +
        Searchuser +
        " is <b>not available</b> in our bakery";
    }
  }
}

function q15b() {
  var pass = prompt("Enter your password");
  var passFirst = pass.slice(0, 1);
  var numCondition = /(?=.*\d)/;
  var capCondition = /(?=.*[A-Z])/;
  var passGrab = document.getElementById("q15b");
  var passLength = pass.length;
  passGrab.innerHTML = " <br>Entered Password: " + pass;
  for (var i = 0; i < pass.length; i++) {
    if (passLength >= 6) {
      if (Number(passFirst) >= 0 && Number(passFirst) <= 9) {
        passGrab.innerHTML +=
          "<br>Password can not begin with a number <br> Please enter a valid Password ";
        break;
      } else {
        var numTest = numCondition.test(pass);
        if (numTest == true) {
          var test2 = capCondition.test(pass);
          if (test2 == true) {
            passGrab.innerHTML += "<br> Correct Password!";
            break;
          } else {
            passGrab.innerHTML +=
              " <br> You password must contain atleast one capital character.";
            break;
          }
        } else {
          passGrab.innerHTML += " <br>Your password Must contain number";
          break;
        }
      }
    } else {
      passGrab.innerHTML +=
        "Password must contain atleast 6 characters. <br> Please Enter a valid Password";
      break;
    }
  }
}

function q16b() {
  var q16b = "University of Karachi";
  var splittedArray = q16b.split("");
  for (var i = 0; i < splittedArray.length; i++) {
    document.getElementById("q16b").innerHTML += splittedArray[i] + "<br>";
  }
}

function q17b() {
  var q17b = prompt("Enter any city name");
  var lastChar = q17b.charAt(q17b.length - 1);
  document.getElementById("q17b").innerHTML =
    "User Input: " + q17b + "<br>Last Character of input: " + lastChar;
}

function q18b() {
  var q18b = "The quick brown fox jumps over the lazy dog";
  var count = q18b.split("the").length;

  document.getElementById("q18b").innerHTML =
    "Text: " +
    q18b +
    "<br>There are " +
    count +
    " occurrence(s) of the word 'the'";
}
