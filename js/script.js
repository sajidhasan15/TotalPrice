var numbers = [65, 44, 12, 4, 10, 30, 70, 100];
var newarray = numbers.map(myFunction)

document.getElementById("demo").innerHTML = numbers;

function myFunction(num) {
  return num+(num * 15)/100;
}
document.getElementById("demo1").innerHTML = newarray;


function checknum(newarray) {
    return newarray > 50;
}
function myFunction2() {
    document.getElementById("demo2").innerHTML = newarray.filter(checknum);
 }


document.getElementById("demo3").innerHTML = newarray.reduce(myFunction3);
function myFunction3(total, num) {
  return total + num;
}

