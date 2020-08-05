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
function getUsers() {
    console.log("getting list of users...");
    usersPromise
        .then((usersArr) => {
            console.log(usersArr);
            console.log("getting the second user...");
            return userPromise(usersArr[1].id);
        })
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        });
}
getUsers();
