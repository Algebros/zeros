module.exports = function zeros(expression) {
  let parseTo = expression.split("*");
  let arr = [];
  parseTo.forEach(element => {
    console.log(arr.push(parse(element)));
  });

  let noZeros = 0;
  arr.forEach(element => {    
    noZeros += checkNoZeros(element);
  });
  if(noZeros == 0) return 0;

  let count = 0;
  arr.forEach(element => {
    count += countZeros(element);
  });
  return count;  
}

function countZeros(item) {
  let i = item[0];
  let x = item[1];

  let result = 0;
  while (i >= 2) {
    if(i%5 == 0) result++;
    if(i%25 == 0) result++;
    i -= x;
  }
  return result;
}

function checkNoZeros(item) {
  let i = item[0];
  let x = 0;
  while (i >= 2) {
    if(i%2 == 0) x++;
    i -= item[1];
  }
  return x;
}

function parse(exp) {
  let even = exp.split("!!");
  let odd = exp.split("!");
  if(even.length > 1) {
    return [even[0], 2];
  }
  return [odd[0], 1];
}
