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
const usersPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(users);
        //reject("something went wrong while getting users");
    }, 4000);
});
async function getUsers() {
    console.log("getting list of users...");
    var userslist = await usersPromise;
    return userslist;
}
/**
 * N.B async functions runs in background and always automatically returns promise
 * but what if we return a value that is not a promise from an async function using the return keyword????
 * Answer: the async function will automatically resolve a promise with the value in the return keyword
 */

/* option1 */
var listofusers = getUsers();
console.log(listofusers);
/* option1 */

/**
 * the best way is shown below i.e option2
 * to test it make sure to comment the option1 shown above and uncomment the option2 shown below
 */

/* option2 */
// getUsers().then((listofusers) => {
//     console.log(listofusers);
// });
/* option2 */