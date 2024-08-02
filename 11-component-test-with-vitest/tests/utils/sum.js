export default function sum(...numbers) {
  return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
}
