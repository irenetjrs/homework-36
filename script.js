// task 1

let usersNames = ['Mike', 'Bob', 'Nikola'];
let users = {};
{users.mike = 'Mike', users.bob = 'Bob', users.nikola = 'Nikola'};
console.log(users);

// task 2

let salaries = {
   "Mike": 1500,
   "Bob": 1800,
   "Nikola": 1700
};
// console.log(Object.entries(salaries))
function maxSalary(salaries) {
   let maxNumber = 0;
   let maxName = null;
   for(const [key, value] of Object.entries(salaries)){
      if (maxNumber < value){
         maxNumber = value;
         maxName = key;
      }
   }
return maxName;
}
console.log(maxSalary(salaries));

// task3

let userss = {
   mike: 'Mike',
   bob: 'Bob',
   nikola: 'Nikola'
};
let {mike: userMike, bob: userBob, nikola: userNikola} = userss;
console.log(userBob);