let guests = ["Barack Obama" , "Waqar Zaka" , "Shelby Shelby"]  

let unableToAttend = "Waqar Zaka";
console.log(`Mr.${unableToAttend} can\'t make it to dinner.`);


let newGuest = "Mukesh Ambani"
guests[guests.indexOf(unableToAttend)] = newGuest

guests.forEach(x => console.log(`Mr.${x} you are invited to dinner.`));
