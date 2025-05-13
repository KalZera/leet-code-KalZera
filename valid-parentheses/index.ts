function isValid(s: string): boolean {

    const stackString = s.split("");
    const openItems = ['(', '{', '[']
    const closeItems = [')', '}', ']']
    let arrayItens = [openItems.indexOf(stackString[0])];

    if (stackString.length % 2 !== 0) {
        return false
    }

    for (let i = 1; i < stackString.length; i++) {
        const isClose = closeItems.indexOf(stackString[i]);
        if (isClose !== -1 && arrayItens.includes(isClose) === false && arrayItens.length > 0) {
            break;
        }
        if(isClose !== -1 && arrayItens.length === 0){
            arrayItens = [-1]
            break;
        }
        if (isClose !== -1 && isClose === arrayItens[arrayItens.length - 1]) {
            arrayItens.pop()
        }

        const isOpen = openItems.indexOf(stackString[i]);
        if (isOpen !== -1) {
            arrayItens.push(isOpen);
        }
    }

    if (arrayItens.length === 0) {
        return true
    }
    return false
};


function mainParentheses(){
  console.log(isValid("()")) //true
  console.log(isValid("()[]{}"))//true
  console.log(isValid("(]"))//false
  console.log(isValid("([])"))//true
}

mainParentheses()