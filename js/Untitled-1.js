function retVar() {
    let num = 50;
    num = 10+num
    return num;
}

let anotherNum = 10 + retVar();
console.log(anotherNum);

let calc = (a,b) => a+b


// свойства и методы

let str = 'test';
console.log(str.length)

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));
