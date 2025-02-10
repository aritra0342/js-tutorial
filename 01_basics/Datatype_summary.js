//1) Primitive Datatypes
    //Number => number
    //String  => string
    // Boolean  => boolean
    //null  => object
    //undefined  =>  undefined
    //Symbol  =>  symbol
    //BigInt  =>  bigint

//2) Non-primitive Datatypes
  //Arrays  =>  object
  //Function  =>  function
  //Object  =>  object
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)  // false

const Heros = ["Antony","Messi","Neymar"]
let MyObj ={
    name: "Aritra",
    Age : 19,
}
const myFunction = function (){
    console.log("Hello World")
}