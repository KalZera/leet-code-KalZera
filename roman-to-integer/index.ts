function romanToInt(s: string): number {

  const map = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
  }

  let total = 0
  for (let idx = 0; idx < s.length; idx++) {
      const value = map[s[idx]]
      const valueNext = map[s[idx + 1]]

      if (value < valueNext) {
          total -= value
      } else {
          total += value
      }

  }

  return total

};


function main(){
  const input = "III"
  const output = romanToInt(input)
  console.log(output) //3

  const input4 = "LVIII"
  const output4 = romanToInt(input4)
  console.log(output4) //58

  const input5 = "MCMXCIV"
  const output5 = romanToInt(input5)
  console.log(output5) //1994
}

main()