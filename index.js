// function to check if number is prime or not
function isPrime(n) {
  var i;
  if (n < 2) return false;
  for (i = 2; i <= Math.sqrt(n); i += 2) if (n % i == 0) return false;
  return true;
}
// Function to calculate Mehana-Mshotaf-gadol
function MMG(a, b) {
  if (a == 0) return b;
  return MMG(b % a, a);
}
// function to calculate phi(n)
function totient(n) {
  var cop = 0;
  // since 1 is counted as coprime we start from 2
  for (let i = 2; i < n; i++) {
    if (MMG(n, i) == 1) cop++;
  }
  // including 1 now
  return cop + 1;
}
function output_phi() {
  var num = $("#n2").val();
  num = String(num).trim().split(" ");
  if ($("#n2").val().length == 0) {
    alert("Please enter a number ");
    return;
  } else {
    
    var result = [];
    var i;
    for (i = 0; i < num.length; i++) {
        if (Number(num[i])<=0){
            result.push("no result");
        }  
        else{
          result.push(totient(Number(num[i])));
        }
        
    }

    var strText = "phi(n) = " + result.join(", ");
    $("#display_phi").text(strText);
  }
}
$(".reset-btn-phi").click(function () {
  $("#display_phi").text(" ");
});
