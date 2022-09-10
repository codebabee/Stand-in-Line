
function nextInLine (arr, item){
  arr.push(item);
  const remainder= arr.shift();
  return remainder;
}
const arrOne = [1, 2, 3, 4, 5];

console.log(nextInLine([2], 1));
