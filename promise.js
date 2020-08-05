var users = [
    {
        id: 1,
        name: "Halefom",
        dept: "IT"
    },
    {
        id: 2,
        name: "Haftamu",
        dept: "EEE"
    },
    {
        id: 3,
        name: "Brhanu",
        dept: "GEM"
    },
    {
        id: 4,
        name: "Yilak",
        dept: "BBB"
    },
    {
        id: 5,
        name: "Goytom",
        dept: "Acc"
    }
];


/* producing promises */
const usersPromise = new Promise((resolve, reject) => {
    /**
     * this block is A callback used to initialize the promise.
     * This callback is accepts two arguments(resolve,reject):
     * a resolve callback used to resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
     */
    setTimeout(() => {
        resolve(users);
        //reject("something went wrong while getting users");
    }, 4000);
});
const userPromise = new Promise((resolve, reject) => {
    setTimeout((id) => {
        resolve(users.filter(user => user.id == id)[0]);
    }, 3000, users[1].id);
});
/* producing promises */


function getUsers() {
    console.log("getting list of users...");

    /* consuming promises */
    usersPromise
        .then((usersArr) => {
            console.log(usersArr);
        })
        .catch((error) => {
            console.log(error);
        });
    console.log("getting the second user...");
    userPromise
        .then((user) => {
            console.log(user);
        });
    /* consuming promises */

    /**
     * if we are sure that the promise will not get rejected we should only call the then() method
     * by leaving to call the catch() method
     * it is because the then() method get executed if the resolve() callback is called
     * and catch() method get executed if the reject() callback is called
     */
}
getUsers();

//we can use async/await to consume promises(the best way and it is modern)