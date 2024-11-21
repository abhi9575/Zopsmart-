function sum(n){
    return (x)=>(x===undefined ? n : sum(n+x))
}
console.log(sum(1)(2)(3)(4)(5)()); // 15
console.log(sum(3)(7)());  //10