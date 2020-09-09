function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select * from people;");
  var array = alasql("MATRIX OF " + user);
  var ans = JSON.stringify(alasql(user));

  document.getElementById("sqlcommand").style.visibility = 'hidden';

  ans = ans.substring(ans.indexOf("{") + 1, ans.indexOf("}"));
  
  var ansArr = ans.split(',');
  var headArr = [];
  var i;
  for( i = 0; i < ansArr.length; i++)
  {
    headArr.push(ansArr[i].substring( ansArr[i].indexOf('"') + 1, ansArr[i].indexOf('":')));
  }

  sqlToTable(headArr, array);
  
  /*change answer here */
  var ans1 = "select * from people;";
  
  //Change string to lower case
  var input = user.toLowerCase();
  
  if(input == ans1)
  {
    document.getElementById("story").innerHTML = "That's the correct command! Did you figure out who the inventor is?";
    green();
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
  }
  else
  {
    document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
  }
}

function check()
{
   var potential = document.getElementById("person").innerHTML;
   potential = potential.toLowerCase();
   if (potential == "dr. phi")
   {
    document.getElementById("answer").innerHTML = "You found the inventor! Now he can combine the Legendary Totems of Fun into a more powerful Totem! This Totem unleashes a force field around the Planet of Fun! The planet is saved from the invaders!";
    document.getElementById("plot").src="assets/Planet_Fun.png";
    
    /* Display the checkmark */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
   }
   else
   {
    document.getElementById("answer").innerHTML = "Try again. This person is not who you are looking for.";
   }
}

/* Function to print certificate (container) */
/* Code from https://stackoverflow.com/questions/2255291/print-the-contents-of-a-div/7167406 */
function printDiv(divName) {
  
  var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><link rel="stylesheet" media="all" href="_activity12.css" type="text/css"></link>');
    mywindow.document.write('</head><body>');
    mywindow.document.write(document.getElementById(divName).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    return true;
}