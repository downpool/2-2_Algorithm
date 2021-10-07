function solution(n, a){
    let answer = n;

    if(a.includes(n)){
        return 1;
    }else{
        let coins = [];
        for(let i of a){
            if(i <= n){
                coins.push(i);
            }
        }
        for(let j of coins){
            num_coin = 1 + solution(n - j, a);
            if(num_coin < answer){
                answer = num_coin;
            }
        }
    }
    return answer;
}
let arr = [1, 5, 10, 25];
let k = 33;
console.log(solution(k, arr));