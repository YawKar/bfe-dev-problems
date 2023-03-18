/**
 * @param {string} num1 (non-negative)
 * @param {string} num2 (non-negative)
 * @return {string}
 */
function add(num1, num2) {
  if (num1 === '0') return num2;
  if (num2 === '0') return num1;
  let n1 = num1;
  let n2 = num2;
  if (n1.length > n2.length) [n1, n2] = [n2, n1];

  n1 = n1.split('').reverse().join('');
  n2 = n2.split('').reverse().join('');

  let result = '';
  let surplus = 0;
  for (let i = 0; i < n1.length; i += 1) {
    let sum = +n1[i] + +n2[i] + surplus;
    surplus = sum > 9 ? 1 : 0;
    sum %= 10;
    result += sum;
  }
  for (let i = n1.length; i < n2.length; i += 1) {
    let sum = +n2[i] + surplus;
    surplus = sum > 9 ? 1 : 0;
    sum %= 10;
    result += sum;
  }
  if (surplus) result += surplus;
  return result.split('').reverse().join('');
}
