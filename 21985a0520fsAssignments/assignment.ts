//DAY-1 Assignment : TypeScript Fundamentals
//Objective: The objective of this assignment is to reinforce your
// understanding of TypeScript fundamentals including basic types,
// functions, interfaces, and classes.

//Basic Types

let n: number = 59
console.log(n)
let s: string = "Ganesh"
console.log(s)
let b: boolean = true
console.log(b)
let arrofnum: number[] = [6,8,13]
console.log(arrofnum)
let tupleofele: [string,number]=["Visakhapatnam",14]
console.log(tupleofele)
enum daysofaweek{
    Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}
console.log(daysofaweek.Tuesday)

//Functions

function add(n1: number, n2: number){
    return n1+n2
}
console.log(add(30,80))

function capitalize(lo: string): string{
    return lo.charAt(0).toUpperCase()+lo.slice(1)
}
console.log(capitalize("good evening ganesh"))

//Interfaces

interface Person{
    Name: string
    Age: Number
    Email: string
}
let user: Person = {
    Name: "Ganesh",
    Age: 21,
    Email: "ganeshvompolu123@gmail.com"
}
console.log(user)

//Classes

class Car{
    Make: string
    Model: string
    Year: number
    constructor(Make: string, Model: string, Year: number){
        this.Make=Make
        this.Model=Model
        this.Year=Year
    }
    DisplayInfo(){
        return "CAR INFORMATION: " + this.Make + " " + this.Model + " " + this.Year
    }
}
let c = new Car("MORASE", "AXE", 2025)
console.log(c.DisplayInfo())

//Generics

function reverseArray<ARR>(array:any[]){
    return array.reverse()
}
console.log(reverseArray(["Ganesh","Visakhapatnam",59,34]))