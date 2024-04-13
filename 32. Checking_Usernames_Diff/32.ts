let  current_users = ["salman" , "lizi" , "zora" , "miku" , "maria"]

let new_users = ["moiz" , "hammad" , "lizi" , "zora" , "amir"]

new_users.forEach(y => {
    if (current_users.some(x => x.toLowerCase() === y.toLowerCase())){
        console.log(`${y} will need to enter a new username,`);
    } else {
        console.log(`${y} is availible`)
    }
})






// new_users.forEach((newUser) => {
//     if (
//       current_users.some(
//         (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
//       )
//     ) {
//       console.log(`${newUser} will need to enter a new username.`);
//     } else {
//       console.log(`${newUser} is available.`);
//     }
//   });