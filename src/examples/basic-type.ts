// 布尔类型
let bool: boolean = false

// 数值类型
let num: number = 123
num = 0b1111011  // 二进制的123
num = 0o173     // 八进制123
num = 0x7b     // 十六进制123

// 字符串类型
let str: string = 'abc'
str = `数值为${num}`
// console.log(str)

// 数组类型
// 写法一
let arr: number[]
arr = [321]
// 写法二
let arr2: Array<number>
let arr3: (string | number)[]
arr3 = [1,'a']  // 既可以是 string 也可以是 number 类型

// 元组类型
let tuple: [string, number, boolean]
tuple = ['a',1,true] // 固定位置类型是啥就得是啥值，长度也必须统一

// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN=5,
    USER
}
console.log(Roles.SUPER_ADMIN) // 0  默认是其索引值
console.log(Roles.ADMIN) // 5
console.log(Roles.USER)  // 6

// any类型
let value: any
value = 'acb'
value = 123
value = true
const arr4: any[] = [1,'a']

// void类型
const consoleText = (text: string): void => {
    console.log(text)
    // 没有返回值 为 void
}
let v: void
v = undefined
v = null  // 非严格模式下可以这样
consoleText('a')

// null 和 undefined
let u: undefined
// u =123 报错
let n = null
// n = 123 报错

// never类型 
const errorFunc = (message: string): never =>{
    throw new Error(message) 
}
const infiniteFunc = (): never => {
    while(true){}
}

// let neverVariable = (() => {
//    while(true){}
// })()
// neverVariable = 123  报错
// num = neverVariable  不报错
// never 类型是任意类型的子集

// object

let obj = {
    name: 'xx'
}
let obj2 = obj
obj2.name = 'ww'
console.log(obj)   // {name: 'ww'}