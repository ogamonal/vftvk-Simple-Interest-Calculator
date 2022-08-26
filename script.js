//This function prints the rate value on screen
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}    

//This function computes the result values on screen
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseFloat(principal) + parseFloat(interest);

    document.getElementById("result").innerHTML="If you deposit <mark>"+
        principal+"</mark>,\<br\>at an interest rate of <mark>"+
        rate+"%</mark>.\<br\>You will receive an amount of <mark>"+
        interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}

//This function validates the principal value
function PrincipalValidation(ctrlID) {
    var txtControl = document.getElementById(ctrlID);
    //var string = document.getElementById(ctrlID).value;
    
    if (txtControl.value == '' || txtControl.value <= 0) {
        alert('Enter a positive number.' );
        txtControl.focus();
        return false;
    }
    return true;
}
