function isPalindrome(x: number): boolean {
  const sNum = String(x);
  let revertNum:String[] = [];
  
  for (let i = sNum.length - 1; i >= 0; i--) {
      revertNum.push(sNum[i]);
  }
  
  const reverted = revertNum.join("");

  return reverted === sNum;
}

function main() {
  const num = 121;
  const result = isPalindrome(num);
  console.log(result); // true

  const num2 = -121;
  const result2 = isPalindrome(num2);
  console.log(result2); // false
  
  const num3 = 10;
  const result3 = isPalindrome(num3);
  console.log(result3); // false

}

main()