
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }
    return false;
}

const numbers = Array.from({ length: 10000 }, (_, i) => i);

const randomIndex = Math.floor(Math.random() * numbers.length);
const target = numbers[randomIndex];

const start = performance.now();
const found = linearSearch(numbers, target);
const end = performance.now();

console.log("Aantal getallen:", numbers.length);
console.log("Eerste 10 getallen:", numbers.slice(0, 10));
console.log("Willekeurig zoekgetal:", target);
console.log("Gevonden:", found);
console.log("Runtime:", (end - start).toFixed(4), "ms");
