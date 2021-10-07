function solution1(s){
    // let s = gets().replace('-', '').replace(/\d(?=\d{4})/g, "*");
    // print(gets().replace(/-/g, '').replace(/\d(?=\d{4})/g, "*"));
    return s.replace(/-/g, '').replace(/\d(?=\d{4})/g, "*");
}
let a = '010-4-444';
console.log(solution1(a));