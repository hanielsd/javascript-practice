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
const userPromise = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            resolve(users.filter(user => user.id == id)[0]);
        }, 3000, userId);
    });
}
async function getUsers() {
    console.log("getting list of users...");
    var userslist = await usersPromise;
    console.log(userslist);//why wait it is because the statement after it is dependent on the result returned
    console.log("getting the second user...");
    var seconduser = await userPromise(userslist[1].id);
    console.log(seconduser);
    console.log("ended");
}
getUsers();
