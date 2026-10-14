
function binarySearch(array, target, low, high) {
    if (low > high) {
        return false;
    }

    const mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
        return true;
    } else if (array[mid] > target) {
        return binarySearch(array, target, low, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, high);
    }
}

const numbers = Array.from({ length: 10000 }, (_, i) => i);

const randomIndex = Math.floor(Math.random() * numbers.length);
const target = numbers[randomIndex];

const start = performance.now();
const found = binarySearch(numbers, target, 0, numbers.length - 1);
const end = performance.now();

console.log("Aantal getallen:", numbers.length);
console.log("Eerste 10 getallen:", numbers.slice(0, 10));
console.log("Willekeurig zoekgetal:", target);
console.log("Gevonden:", found);
console.log("Runtime:", (end - start).toFixed(4), "ms");