var name = process.argv[2];
var age = parseInt(process.argv[3]);
var basicsalary = parseInt(process.argv[4]);

const hra = (50*basicsalary)/100
const specialallowance = (30*basicsalary)/100
const pf = (12*basicsalary)/100

let grosssalary = (basicsalary+hra+specialallowance) -pf
let annualgrosssalary = (12 * grosssalary)

console.log("the annualgross income of ", name, " is ", annualgrosssalary)
console.log(`the monthly gross income of ${name} is ${annualgrosssalary}`)
//  for ${out}