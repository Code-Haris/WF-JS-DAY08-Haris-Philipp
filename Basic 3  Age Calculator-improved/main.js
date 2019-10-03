function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
console.log( getAge(new Date(1985, 10, 13)) );
alert(getAge(new Date(1985, 10, 13)));

