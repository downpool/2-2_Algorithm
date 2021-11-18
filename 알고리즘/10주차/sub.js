function solution(){
    gets();
    let nodes = gets().split(' ');
    let target = Number(gets());
    let ansarr = [];
    nodes.forEach((v, i) => {
        let temp = [v, i, Math.abs(target - Number(v))];
        ansarr.push(temp);
    })
    ansarr.sort((a, b) => {
        if(a[2] != b[2]){
            return a[2] - b[2];
        }else{
            return a[1] - b[1];
        }
    })
    let i = Number(gets());
    let ans = [];
    for(let j = 0; j < i; j++){
        ans.push(ansarr[j][0]);
    }
    print(ans.join(' '));
}