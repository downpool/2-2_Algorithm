function solution1() {
    let input = gets().split(' ');
    input[0] = Number(input[0]);
    input[1] = Number(input[1]);
    let nodes = gets().toLowerCase().split(' ');
    let graph = [];

    for (let i = 0; i < input[1]; i++) {
        let temp = gets().toLowerCase().split(' ');
        graph.push([temp[0], temp[1]]);
        graph.push([temp[1], temp[0]]);
    }

    function DFS(g, v, visit) {
        visit[v] = 1;

        for (let i = 0; i < g.length; i++) {
            if (g[i][0] == v) {
                if (visit[g[i][1]] !== 1) {
                    DFS(g, g[i][1], visit);
                }
            } else if (g[i][1] == v) {
                if (visit[g[i][0]] !== 1) {
                    DFS(g, g[i][0], visit);
                }
            }
        }
    }

    let ans = 'True';

    let visit = nodes.slice();
    DFS(graph, nodes[0], visit);
    for (let i = 0; i < visit.length; i++) {
        if (visit[i] != nodes[i]) {
            ans = 'False';
            break;
        }
    }

    print(ans);
}
function solution1_2_sol(){
    let input = gets().split(' ');
    let n = Number(input[0]);
    let m = Number(input[1]);
    let nodes = gets().split(' ');
    let graph = Array.from(Array(n), () => Array(n).fill(0));
    for(let i = 0; i < m; i++){
        let temp = gets().split(' ');
        graph[nodes.indexOf(temp[0])][nodes.indexOf(temp[1])] = 1;
        graph[nodes.indexOf(temp[1])][nodes.indexOf(temp[0])] = 1;
    }

    function DFS(g, v, visit){
        visit[v] = true;

        for(let i = 0; i < g[v].length; i++){
            if(g[v][i] == 1 && !visit[i]){
                DFS(g, i, visit);
            }
        }
    }
    let answer = 'False';
    for(let i of nodes){
        let visited = Array(n).fill(false);
        let idx = nodes.indexOf(i);
        DFS(graph, idx, visited);
        if(!visited.includes(false)){
            answer = 'True';
        }
    }
    print(answer);
}

function solution2() {
    let inp = gets().split(' ');
    let input = gets().split(' ');
    let base = [];
    let power = [];

    for (let i of inp) {
        base.push(Number(i));
    }
    for (let i of input) {
        power.push(Number(i));
    }

    base.sort();
    power.sort();

    let min = 0;
    let max = Math.max((Math.max(...power) - Math.min(...base)), (Math.max(...base) - Math.min(...power)));
    let mid;
    let ans = [];

    function powerOk(b, p, sup) {
        for (let i of b) {
            let ok = false;
            for (let j of p) {
                if ((i + sup) <= j && (i - sup) >= j) {
                    ok = true;
                }
            }
            if (!ok) return false;
        }
        return true;
    }

    while (min <= max) {
        mid = Math.floor((min + max) / 2);

        if (powerOk(base, power, mid)) {
            ans.push(mid);
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    print(Math.min(...ans));

}
function solution2_2(){
    let input = gets().split(' ');
    let base = [];
    input.forEach(e => {
        base.push(Number(e));  
    })
    input = gets().split(' ');
    let power = [];
    input.forEach(e => {
        power.push(Number(e));
    })
    

}
function solution3() {


}

function solution4_sol() {

    function chang(n) {
        let k = n.toString().split('');
        let wer = [];
        for (let i = 0; i < k.length; i++) {
            let temp = k[i];
            if (temp == '0') wer.unshift('0');
            else if (temp == '1') wer.unshift('1');
            else if (temp == '6') wer.unshift('9');
            else if (temp == '8') wer.unshift('8');
            else if (temp == '9') wer.unshift('6');
            else return false;
        }
        if (Number(k.join('')) != Number(wer.join(''))) return true;
        else return false;
    }

    let ans = 0;
    let t = Number(gets().trim());

    for (let i = 1; i <= t; i++) {
        if (chang(i)) ans++;
    }

    print(ans);
}