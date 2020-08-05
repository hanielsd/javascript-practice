function getUsers() {
    console.log("getting list of users...");
    setTimeout(() => {
        //this block is callback
        var users = userslist();
        console.log(users);
    }, 3000);
}
function userslist() {
    return [
        {
            name: "Halefom",
            dept: "IT"
        },
        {
            name: "Haftamu",
            dept: "EEE"
        },
        {
            name: "Brhanu",
            dept: "GEM"
        }
    ];
}
getUsers();