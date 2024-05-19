let guests = ['Kayne West','Barack Obama','Albert Einstein','Mukesh Ambani','Shelby Shelby','Elon Musk']

console.log("sorry guys now i can only invite only 2 people on dinner")

console.log(guests.pop(), "sorry i can't invite you to dinner")
console.log(guests.pop(), "sorry i can't invite you to dinner")
console.log(guests.pop(), "sorry i can't invite you to dinner")
console.log(guests.pop(), "sorry i can't invite you to dinner")



for (let i = 0 ; i < guests.length ; i++)
    {
        console.log(guests[i]+ " you are still invited")
    }

guests.splice(0)

console.log(guests)
