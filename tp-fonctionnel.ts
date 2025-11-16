let counter = 0;

function add(a: number, b: number): number {
  return a + b;  // fonction pure toujours le même résultat
}

function increment(): number {
  counter++;
  return counter; // fonction impure change la variable globale
}

console.log(add(2, 3));
console.log(increment());

console.log(add(7,1));
console.log(increment());

//2

const student = { name: "Léo", grade: 14 }; // objet de base
function updateGrade(student, newGrade) {
  return {...student, grade: newGrade }; // crée un nouvel objet sans modifier l ancien
}
const olderStudent = updateGrade(student, 15); // nouvelle note
console.log(olderStudent); // l original ne change pas

//3

function applyNTimes(f: (x: number) => number, n: number, x: number): number {
  let result = x; // résultat de départ
  for (let i =0; i < n; i++) { // répéter n fois
    result = f(result); // appliquer f
  }
  return result;
}
const double = (x: number) => x * 2; // fonction simple
console.log(applyNTimes(double, 3, 1)); // 8

//4
const numbers = [1, 2, 3, 4, 5, 6]; // tableau simple

const result = numbers
  .filter(n => n % 2 === 0) // garder les nombres pairs
  .map(n => n * 2) // multiplier par deux
  .reduce((a, b) => a + b, 0); // additionner tout

console.log(result); // 24

function sum(arr: number[]): number {
  return arr.reduce((acc, x) => acc + x, 0); // faire la somme
}

function average(arr: number[]): number {
  return sum(arr) / arr.length; // calculer la moyenne
}

function product(arr: number[]): number {
  return arr.reduce((acc, x) => acc * x, 1); // multiplier tout
}

console.log(sum(numbers));
console.log(average(numbers));
console.log(product(numbers));

//5
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

// trouver un utilisateur majeur
const firstAdult = users.find(u => u.age >= 18);
console.log(firstAdult);

// savoir si un mineur existe
console.log(users.some(u => u.age < 18));  // au moins un mineur 
// savoir si tous ont plus de 10 ans
console.log(users.every(u => u.age > 10)); // tous > 10 ?


// liste des noms
const names = users.map(u => u.name);
console.log(names.includes("Alice"));
console.log(names.includes("Eve"));

// hobby avec flatMap
const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
];

const allHobbies = usersWithHobbies.flatMap(u => u.hobbies); // prendre tous les hobbies
console.log(allHobbies);


// trier sans modifier l original
const sortedByAge = [...users].sort((a, b) => a.age - b.age); // tri croissant
console.log(sortedByAge);

const youngestTwo = sortedByAge.slice(0, 2); // prendre les deux plus jeunes
console.log(youngestTwo);

// BONUS

type User = { name: string; age: number; country: string }

const data: User[] = [
  { name: "Alice", age: 25, country: "France" },
  { name: "Bob", age: 15, country: "France" },
  { name: "Charlie", age: 30, country: "Spain" },
  { name: "Diana", age: 22, country: "France" },
]

// filtrer les adultes français
const frenchAdults = data.filter(u => u.country === "France" && u.age >= 18)
console.log(frenchAdults)

// prendre les noms
const adultNames = frenchAdults.map(u => u.name)
console.log(adultNames)

// tri décroissant
const sortedDesc = [...frenchAdults].sort((a, b) => b.age - a.age)
console.log(sortedDesc)

// moyenne d âge
const avgAge = sortedDesc.reduce((acc, u) => acc + u.age, 0) / sortedDesc.length
console.log(avgAge)