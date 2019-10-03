// function getAge(d1, d2){
//     d2 = d2 || new Date();
//     var diff = d2.getTime() - d1.getTime();
//     return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//     var diff = document.getElementById("own").innerHTML;
// }
// console.log( getAge(new Date(1985, 10, 13)) );
// alert(getAge(new Date(1985, 10, 13)));


function getAge() {
    var Q4A = "Your birthday is: ";
    var Bdate = document.getElementById('age').value;
    var Bday = +new Date(Bdate);
    Q4A += Bdate + ". You are " + ~~ ((Date.now() - Bday) / (31557600000));
    var theBday = document.getElementById('age');
    theBday.innerHTML = Q4A;
}
