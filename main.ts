// function printString({ str }: { str?: string}) {
//   console.log(str)
// }



function printString({ str = "Hello" } = {}) {
  console.log(str)
}

printString()