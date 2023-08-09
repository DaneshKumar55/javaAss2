var user1 = [];
console.log(user1.length);
console.log(user1);
user1[5] = "info@gmail.com"
console.log(user1);
user1[0] = "iHunar"
console.log(user1);
user1[55] = "iSkillers"
console.log(user1);

var mobileNumber = prompt("Type your mobile number");
if (mobileNumber === "" || mobileNumber === null){
    var user2 = prompt("Type your name")
    if ( user2 === "" || user2 === null){
        user1.shift();
    } else{
        user2.unshift("iHunar")
    }
}
console.log(user1);
// console.log(user2);




// var user1 = [];
// console.log(user1.length);
// console.log(user1);
// user1[5] = "info@gmail.com"
// console.log(user1);
// user1[0] = "iHunar"
// console.log(user1);
// user1[55] = "iSkillers"
// console.log(user1);

// var mobileNumber = prompt("Type your mobile number");
// if (mobileNumber === "" || mobileNumber === null){
//     user1.pop()
// } else {
//     user1.push(mobileNumber)
// }
// console.log(user1);







