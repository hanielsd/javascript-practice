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
function getUsers() {
    console.log("getting list of users...");
    setTimeout(() => {
        console.log(users);
        console.log("getting the second user...");
        setTimeout((id) => {
            console.log(users.filter(user => user.id == id)[0]);
            console.log("getting name of second user");
            setTimeout((id) => {
                console.log(users.filter(user => user.id == id)[0].name);
            }, 3000, users[1].id);
        }, 3000, users[1].id);
    }, 4000);
}
//those nested callbacks are known as callback hell
//but in ES6 and higher we can use promises instead of callback hell
getUsers();