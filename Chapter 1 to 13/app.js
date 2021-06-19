  // chap: 1, 2, 3
  var myName = "Nabia Sheikh";
  var message = "Hello World";
  var age = 23;
  var course = "Certified mobile application development";
  var pizza = "PIZZA";
  var email = "abc@gmail.com";
  var book = "A smarter way to learn JavaScript";
  var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
  var visit = 10;
  var birthYear = 1997;
  var orderNumber = 5;
  var orderType = "T shirt";
  var place = "xyz Clothing Store";

    // chap:4
    // question:1
    var a;
    var $prize;
    var _name;

    // question:2
    // legal variable
    var a;
    var $prize;
    var _name;
    var first_name;
    var name2;
    // illegal variable 

    // var function;
    // var .Prize;
    // var first name;
    // var Prompt.;
    // var name 2;
    
    function blanks()
    {
        document.getElementsByClassName('blankss')[0].innerHTML = `a)Rules for naming JS variables`;
        document.getElementsByClassName('blankss')[1].innerHTML = `b) Variable names can only contain numbers , $and _`;
        document.getElementsByClassName('blankss')[2].innerHTML = `c) Variables must begin with a letter, $ or _ `;
        document.getElementsByClassName('blankss')[3].innerHTML = `d) Variable names are case sensitive.`;
        document.getElementsByClassName('blankss')[4].innerHTML = `e) Variable names should not be JS keywords.`;
    
    }


    // chap:5

    function add() {
        var num1 = parseInt(prompt("Enter first Number"));
        var num2 = parseInt(prompt("Enter second Number"));
        var addition = num1 + num2;
        document.getElementById('result').innerHTML = ` Addition of two inputs: ` + addition;
    }

    function sub() {
        var num3 = parseInt(prompt("Enter first Number"));
        var num4 = parseInt(prompt("Enter second Number"));
        var subtraction = num3 - num4;
        document.getElementById('subtraction').innerHTML = ` Subtraction: ` + subtraction;
    }

    function mul() {
        var num5 = parseInt(prompt("Enter first Number"));
        var num6 = parseInt(prompt("Enter second Number"));
        var multiplication = num5 * num6;
        document.getElementById('multiplication').innerHTML = ` Multiplication: ` + multiplication;
    }

    function division() {
        var num7 = parseInt(prompt("Enter first Number"));
        var num8 = parseInt(prompt("Enter second Number"));
        var division = num7 / num8;
        document.getElementById('division').innerHTML = ` Division: ` + division;
    }

    function modulus() {
        var num9 = parseInt(prompt("Enter first Number"));
        var num10 = parseInt(prompt("Enter second Number"));
        var modulus = num9 / num10;
        document.getElementById('modulus').innerHTML = ` Modulus: ` + modulus;
    }

    function ques3() {
        var q3;
        document.getElementsByClassName('description')[0].innerHTML = `Value after Declaration is ` + q3;
        q3 = 5;
        document.getElementsByClassName('description')[1].innerHTML = `Initial value ` + q3;
        ++q3;
        document.getElementsByClassName('description')[2].innerHTML = `Value After Increment is ` + q3;
        q3 = q3 + 7;
        document.getElementsByClassName('description')[3].innerHTML = `Value after addition is ` + q3;
        q3--;
        document.getElementsByClassName('description')[4].innerHTML = `Value after decrement is ` + q3;
        q3 = q3 % 3;
        document.getElementsByClassName('description')[5].innerHTML = `The reamainder is ` + q3;
    }

    function ques4() {
        var ticketPrice = 600;
        var totalCost = ticketPrice * 5;
        document.getElementById('ticket').innerHTML = "Total cost to buy 5 tickets to a movie is " + totalCost +
            "PKR";
    }


    function ques5() {
        document.getElementsByClassName('table')[0].innerHTML = "4 * 1 = " + (4 * 1);
        document.getElementsByClassName('table')[1].innerHTML = "4 * 2 = " + (4 * 2);
        document.getElementsByClassName('table')[2].innerHTML = "4 * 3 = " + (4 * 3);
        document.getElementsByClassName('table')[3].innerHTML = "4 * 4 = " + (4 * 4);
        document.getElementsByClassName('table')[4].innerHTML = "4 * 5 = " + (4 * 5);
        document.getElementsByClassName('table')[5].innerHTML = "4 * 6 = " + (4 * 6);
        document.getElementsByClassName('table')[6].innerHTML = "4 * 7 = " + (4 * 7);
        document.getElementsByClassName('table')[7].innerHTML = "4 * 8 = " + (4 * 8);
        document.getElementsByClassName('table')[8].innerHTML = "4 * 9 = " + (4 * 9);
        document.getElementsByClassName('table')[9].innerHTML = "4 * 10 = " + (4 * 10);
    }

    function ques6() {
        var celsius = 25;
        var Fahrenheit = 70;
        var convertedFahreneheit = (celsius * 9 / 5) + 32;
        var convertedCelsius = (Fahrenheit - 32) * 5 / 9;

        document.getElementsByClassName('ques6')[0].innerHTML = celsius + ` <sup>o</sup>C  is ` +
            convertedFahreneheit + `<sup>o</sup>F `;

        document.getElementsByClassName('ques6')[1].innerHTML = Fahrenheit + ` <sup>o</sup>F  is ` +
            convertedCelsius + `<sup>o</sup>C `;


    }

    function ques7() {
        var item1 = 650;
        var item2 = 100;
        var item1Quantity = 3;
        var item2Quantity = 7;

        var shippingCharges = 100;

        var totalCost = (item1 * item1Quantity) + (item2 * item2Quantity) + shippingCharges;
        document.getElementById('ques7').innerHTML = "Total cost of your order is " + totalCost;
    }

    function ques8() {
        var totalMark = 980;
        var obtainedMarks = 804;
        var percentage = (obtainedMarks / totalMark) * 100;

        document.getElementById('ques8').innerHTML = "Percentage : " + percentage + "%";
    }

    function ques9() {
        var dollars = 10;
        var riyals = 25;
        var cDollars = 10 * 104.80;
        var cRiyals = 25 * 28;
        var converted = cDollars + cRiyals;
        document.getElementById('ques9').innerHTML = "Total currency is PKR. " + converted;
    }

    function ques10() {
        var a = 10;
        var arithmetic = ((a + 5) * 10) / 2;
        document.getElementById('ques10').innerHTML =
            " Addition of 5 & 10 then Multiply the result by 10 then divide by 2" + arithmetic;
    }

    function ques11() {

        var currentYear = 2016;
        var birthYear = 1992;
        var age = currentYear - birthYear;

        document.getElementsByClassName('ques11')[0].innerHTML = "Current Year : " + currentYear;
        document.getElementsByClassName('ques11')[1].innerHTML = "Birth Year : " + birthYear;
        document.getElementsByClassName('ques11')[2].innerHTML = "Your age is : " + age;
    }

    function ques12() {
        var radius = 20;
        var circumference = Math.PI * 2 * radius;
        document.getElementsByClassName("ques12")[0].innerHTML = "Radius of a circle is  " + radius;
        document.getElementsByClassName("ques12")[1].innerHTML = "The circumference is " + circumference;
        var area = Math.PI * radius * radius;

        document.getElementsByClassName("ques12")[2].innerHTML = "The area is : " + area.toFixed(1);
    }

    function ques13() {
        var favouriteSnack = "chocolate chip"
        var age = 15;
        var maxAge = 65;
        var amountsofSnack = 3;
        var totalNeeded = (amountsofSnack * 365) * (maxAge - age);
        var message = 'You will need ' + totalNeeded + " " + favouriteSnack +
            ' to last you until the ripe old age of  ' +
            maxAge;
        document.getElementsByClassName("ques13")[0].innerHTML = "Favourite snack :" + favouriteSnack;
        document.getElementsByClassName("ques13")[1].innerHTML = "Current Age :" + age;
        document.getElementsByClassName("ques13")[2].innerHTML = "Estimated maximum Age :" + maxAge;
        document.getElementsByClassName("ques13")[3].innerHTML = "Amounts of Snack per Day :" + amountsofSnack;
        document.getElementsByClassName("ques13")[4].innerHTML = message;
    }

     //   chap:6,7,8
     
  function arithmetic() {
    var a = 10;

    document.write("Result:");
    document.write("<br>The value of a is: " + a);
    document.write("<br>.................................");
    document.write("<br><br> The Value of ++a is: " + ++a);
    document.write("<br>Now the Value of a is: " + a);
    document.write("<br><br> The Value of a++ is: " + a++);
    document.write("<br>Now the Value of a is: " + a);
    document.write("<br><br> The Value of --a is: " + --a);
    document.write("<br>Now the Value of a is: " + a);
    document.write("<br><br> The Value of a-- is: " + a--);
    document.write("<br>Now the Value of a is: " + a);
  }

  function result() {
    var a = 2,
      b = 1;
    var result = --a - --b + ++b + b--;
    document.write("a is " + a);
    document.write("<br>");
    document.write("b is " + b);
    document.write("<br>");
    document.write(`the result is ` + result);
    document.write("<br>...............................");
    document.write("<br>");
    document.write(--a);
    document.write("<br>");
    document.write(--a - --b);
    document.write("<br>");
    document.write(--a - --b + ++b);
    document.write("<br>");
    document.write(--a - --b + ++b + b--);
  }

  function ttable() {
    var num = prompt("Enter Number", "5"); //prompt user to enter the number
    var num = parseInt(num); //parse the num to number
    var i = 0;
    document.write('<table border="1" cellspacing="0">');
    for (i = 1; i < 10; i++) {
      document.write(
        "<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>"
      );
    }
  }

  function table() {
        var subject1 = prompt("Enter first subject Name");
        var subject2 = prompt("Enter Second subject Name");
        var subject3 = prompt("Enter Third subject Name");
        document.getElementById('sub1').innerHTML = "<b>" + subject1 + "</b>"
        document.getElementById('sub2').innerHTML = "<b>" + subject2 + "</b>"
        document.getElementById('sub3').innerHTML = "<b>" + subject3 + "</b>"


        var totalMarks = 100;
        document.getElementsByClassName("tMarks")[0].innerHTML = totalMarks;
        document.getElementsByClassName("tMarks")[1].innerHTML = totalMarks;
        document.getElementsByClassName("tMarks")[2].innerHTML = totalMarks;
        document.getElementsByClassName("oMarks")[0].innerHTML = "<b>" + (totalMarks * 3) + "</b>";

        var obtained1 = parseInt(prompt("Enter " + subject1 + " Marks"))
        var obtained2 = parseInt(prompt("Enter " + subject2 + " Marks"))
        var obtained3 = parseInt(prompt("Enter " + subject3 + " Marks"))

        document.getElementById("obtained1").innerHTML = obtained1;
        document.getElementById("obtained2").innerHTML = obtained2;
        document.getElementById("obtained3").innerHTML = obtained3;
        document.getElementById("totalObtained").innerHTML = "<b>" + (obtained1 + obtained2 + obtained3) + "</b>";


        var totalObtained = obtained1 + obtained2 + obtained3;
        console.log(totalObtained)
        var subj1Percentage = (obtained1 / totalMarks) * 100;
        var subj2Percentage = (obtained2 / totalMarks) * 100;
        var subj3Percentage = (obtained3 / totalMarks) * 100;
        document.getElementById("p1").innerHTML = subj1Percentage + "%";
        document.getElementById("p2").innerHTML = subj1Percentage + "%";
        document.getElementById("p3").innerHTML = subj1Percentage + "%";


        var totalPercentage = (totalObtained / 300) * 100;
        document.getElementById("tp").innerHTML = "<b>" + Math.round(totalPercentage) + "% </b> ";
    }

    // chap: 9 to 11
    function ques1() {
        var city = prompt("Enter your city")
        if (city === "Karachi" || city === "karachi") {
            document.getElementById("ques1").innerHTML = "Welcome to City of Lights"
        }
    }

    function ques2() {
        var gender = prompt("Enter your Gender")
        if (gender == "Male" || gender == "male" || gender == "m") {
            document.getElementById("ques2").innerHTML = "Good morning sir"
        }
        if (gender == "Female" || gender == "female" || gender == "f") {
            document.getElementById("ques2").innerHTML = "Good morning  Ma'am"
        }
    }

    function ques3() {
        var enterColor = prompt("Enter Signal Color");

        if (enterColor === "red" || enterColor === "Red") {
            document.getElementById('ques3').innerHTML = "Must Stop"
        }

        if (enterColor === "yellow" || enterColor === "Yellow") {
            document.getElementById('ques3').innerHTML = "Ready to Move"
        }
        if (enterColor === "green" || enterColor === "Green") {
            document.getElementById('ques3').innerHTML = "Move Now"
        }
    }

    function ques4() {
        var fuel = parseInt(prompt("Enter Remaining feul"));
        if (fuel < 0.25) {
            document.getElementById("ques4").innerHTML = "Please refill the fuel in your car"
        }
    }

    function ques5() {
        var a = 4;
        if (++a === 5) {
            alert("given condition for variable a is true");
        }
        var b = 82;
        if (b++ === 83) {
            alert("given condition for variable b is true");
        }
        var c = 12;
        if (c++ === 13) {
            alert("condition 1 is true");
        }
        if (c === 13) {
            alert("condition 2 is true");
        }
        if (++c < 14) {
            alert("condition 3 is true");
        }
        if (c === 14) {
            alert("condition 4 is true");
        }
        var materialCost = 20000;
        var laborCost = 2000;
        var totalCost = materialCost + laborCost;
        if (totalCost === laborCost + materialCost) {
            alert("The cost equals");
        }
        if (true) {
            alert("True");
        }
        if (false) {
            alert("False");
        }
        if ("car" < "cat") {
            alert("car is smaller than cat");
        }
    }

    function ques6() {
        var marks1 = parseInt(prompt("Enter 1st Subject Marks"));
        var marks2 = parseInt(prompt("Enter 2nd Subject Marks"));
        var marks3 = parseInt(prompt("Enter 3rd Subject Marks"));

        var obtainedMarks = (marks1 + marks2 + marks3);

        var totalMarks = parseInt(prompt("Enter total marks of 3 subjects"));

        var result = (obtainedMarks / totalMarks) * 100;

        if (result >= 80) {
            document.getElementById("ques6").innerHTML = "Marksheet";
            document.getElementsByClassName("ques6Details")[0].innerHTML = "Total marks " + totalMarks;
            document.getElementsByClassName("ques6Details")[1].innerHTML = "Obtained Marks " + obtainedMarks;
            document.getElementsByClassName("ques6Details")[2].innerHTML = "Percentage " + result + "%";
            document.getElementsByClassName("ques6Details")[3].innerHTML = "Grade : A- One";
            document.getElementsByClassName("ques6Details")[4].innerHTML = "Remarks: Excellent";
        }

        if (result >= 70) {
            document.getElementById("ques6").innerHTML = "Marksheet";
            document.getElementsByClassName("ques6Details")[0].innerHTML = "Total marks " + totalMarks;
            document.getElementsByClassName("ques6Details")[1].innerHTML = "Obtained Marks " + obtainedMarks;
            document.getElementsByClassName("ques6Details")[2].innerHTML = "Percentage " + result + "%";
            document.getElementsByClassName("ques6Details")[3].innerHTML = "Grade : A";
            document.getElementsByClassName("ques6Details")[4].innerHTML = "Remarks: Good";
        }

        if (result >= 60) {
            document.getElementById("ques6").innerHTML = "Marksheet";
            document.getElementsByClassName("ques6Details")[0].innerHTML = "Total marks " + totalMarks;
            document.getElementsByClassName("ques6Details")[1].innerHTML = "Obtained Marks " + obtainedMarks;
            document.getElementsByClassName("ques6Details")[2].innerHTML = "Percentage " + result + "%";
            document.getElementsByClassName("ques6Details")[3].innerHTML = "Grade : B";
            document.getElementsByClassName("ques6Details")[4].innerHTML = "Remarks: You need to improve";
        }

        if (result < 60) {
            document.getElementById("ques6").innerHTML = "Marksheet";
            document.getElementsByClassName("ques6Details")[0].innerHTML = "Total marks " + totalMarks;
            document.getElementsByClassName("ques6Details")[1].innerHTML = "Obtained Marks " + obtainedMarks;
            document.getElementsByClassName("ques6Details")[2].innerHTML = "Percentage " + result + "%";
            document.getElementsByClassName("ques6Details")[3].innerHTML = "Grade : Fail";
            document.getElementsByClassName("ques6Details")[4].innerHTML = "Remarks: Sorry";
        }


    }


    function question7() {
        var secretNumber = 8;
        var guessNumber = parseInt(prompt("Enter number b/w 1 - 10"));
        var check = guessNumber + 1;
        if (secretNumber == guessNumber) {
            document.getElementById("question7").innerHTML = "Bingo! Correct answer";


        } else if (secretNumber === check) {
            document.getElementById("question7").innerHTML = "Close enough to the correct answer";
        }
    }

    function question8() {
        var numb = parseInt(prompt("Enter number:"));
        if (numb % 3 == 0) {
            document.getElementById("question8").innerHTML = 'Number is divisible by 3';
        }
    }

    function question9() {
        var numb = parseInt(prompt("Enter number:"));
        if (numb % 2 == 0) {
            document.getElementById("question9").innerHTML = 'Number is Even';
        }
        else {
            document.getElementById("question9").innerHTML = 'Number is Odd';
        }
    }

    function question10() {
        var temp = parseInt(prompt("Enter Temperature:"));
        if (temp > 40) {
            document.getElementById("question10").innerHTML = 'It is too hot outside.';
        }
        if (temp > 30) {
            document.getElementById("question10").innerHTML = 'The Weather today is Normal.';
        }
        if (temp > 20) {
            document.getElementById("question10").innerHTML = 'Today’s Weather is cool.';
        }
        if (temp > 10) {
            document.getElementById("question10").innerHTML = 'OMG! Today’s weather is so Cool.';
        }
        
    }

    function ques11() {
        var num1 = parseInt(prompt("Enter first number:"));
        var num2 = parseInt(prompt("Enter second number:"));
        var operand = prompt("Enter any operator");
        if (operand == "+") {
            document.getElementById("ques11").innerHTML = num1+num2;
        }
        if (operand == "-") {
            document.getElementById("ques11").innerHTML =  num1-num2;
        }
        if (operand == "*") {
            document.getElementById("ques11").innerHTML =  num1*num2;
        }
        if (operand == "/") {
            document.getElementById("ques11").innerHTML =  num1/num2;
        }
        if (operand == "%") {
            document.getElementById("ques11").innerHTML =  num1%num2;
        }
        
    }

    // chap:12 to 13

    function quess2() {
        var num1 = parseInt(prompt("Enter first number:"));
        var num2 = parseInt(prompt("Enter second number:"));

        if (num1 == num2) {
            document.getElementById("quess2").innerHTML =`Both are equal`;
        }
        if (num1 > num2) {
            document.getElementById("quess2").innerHTML =  `Number 1 is greater`;
        }
        if (num1 < num2) {
            document.getElementById("quess2").innerHTML = `Number 2 is greater`;
        }
    }
    function question1() {
        var ques1 = prompt("Enter Number or String");
        if (ques1 >= 65 && ques1 <= 90) {
            document.getElementById("question1").innerHTML = "Uppercase"
        }

    }

    function question3() {
        var question3 = parseInt(prompt("Enter any number"));
        if (question3 > 0) {
            document.getElementById("question3").innerHTML = "Positive Number"
        } else if (question3 < 0) {
            document.getElementById("question3").innerHTML = "Negative Number"
        } else {
            document.getElementById("question3").innerHTML = "Zero"
        }
    }

    function question4() {
        var q4 = prompt("Enter one charater");
        if (q4 == "a" || q4 == "e" || q4 == "i" || q4 == "o" || q4 == "u") {
            document.getElementById("question4").innerHTML = "True"
        } else if (q4 == "A" || q4 == "E" || q4 == "I" || q4 == "O" || q4 == "U") {
            document.getElementById("question4").innerHTML = "True"
        } else {
            document.getElementById("question4").innerHTML = "False"
        }

    }

    function question5() {
        var pass = "abc";
        var enterPass = prompt("Enter your Password");
        if (enterPass == "" || enterPass == null) {
            document.getElementById("question5").innerHTML = "Please Enter Your password"
        } else if (enterPass === pass) {
            document.getElementById("question5").innerHTML = "Correct!"
        } else {
            document.getElementById("question5").innerHTML = "Incorrect Password!"
        }
    }

    function question6() {
        var greeting;
        var hour = 13;
        if (hour < 18) {
            greeting = "Good day";
            document.getElementById("question6").innerHTML = greeting;
        } else {
            greeting = "Good Evening"
            document.getElementById("question6").innerHTML = greeting;
        }
    }

    function question7() {
        var time = parseInt(prompt("Enter time between 00:00 - 24:00"))
        if (time === 0000 || time === 2400) {
            document.getElementById("question7").innerHTML = "12"
        } else if (time === 0100 || time === 1300) {
            document.getElementById("question7").innerHTML = "1"
        } else if (time === 2000 || time === 1400) {
            document.getElementById("question7").innerHTML = "2"
        } else if (time === 3000 || time === 1500) {
            document.getElementById("question7").innerHTML = "3"
        } else if (time === 4000 || time === 1600) {
            document.getElementById("question7").innerHTML = "4"
        } else if (time === 5000 || time === 1700) {
            document.getElementById("question7").innerHTML = "5"
        } else if (time === 6000 || time === 1800) {
            document.getElementById("question7").innerHTML = "6"
        } else if (time === 7000 || time === 1900) {
            document.getElementById("question7").innerHTML = "7"
        } else if (time === 8000 || time === 2000) {
            document.getElementById("question7").innerHTML = "8"
        } else if (time === 9000 || time === 2100) {
            document.getElementById("question7").innerHTML = "9"
        } else if (time === 1000 || time === 2200) {
            document.getElementById("question7").innerHTML = "10"
        } else if (time === 1100 || time === 2300) {
            document.getElementById("question7").innerHTML = "11"
        }
    }

