var arr = ["Ethiopia", "Kenya", "China", "Egypt", "North korea", "Esrael", "Germany", "Sweden", "Brazil", "Nigerya"];
function sayHello() {
    var randomNum = parseInt(Math.random() * 10);
    console.log("<<<<<<<<<<<<<<<<<<<<<country being tracked: " + arr[randomNum] + ">>>>>>>>>>>>>>>>>>>>>>>");
}
setInterval(sayHello, 1000);