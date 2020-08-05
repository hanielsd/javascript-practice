function first() {
    console.log("first");
    second();//this function will be executed in background
    console.log("end");//this instruction will get executed while the second() function is in background execution
}
function second() {
    console.log("second");
}
first();