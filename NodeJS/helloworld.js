console.log("hello world")
const x =1
var y = "hi"
function test() {
    let x = 1;
    {
        let x = 2; // local variable
        console.log(x)
    }
    console.log(x)
}
test()
console.log(process.argv[3]) // node helloworld.js hello hi
//print hi
