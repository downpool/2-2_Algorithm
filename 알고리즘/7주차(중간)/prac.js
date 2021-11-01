function b1260() {
    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    let inp = Array.from(Array(Number(input.length)), () => Array());
    for (let i = 0; i < input.length; i++) {
        let temp = input[i].split(' ');
        for (let j of temp) {
            inp[i].push(Number(j));
        }
    }
    //인접 행렬
    let graph = Array.from(Array(inp[0][0] + 1), () => Array(inp[0][0] + 1).fill(0));
    for (let i = 1; i < inp.length; i++) {
        graph[inp[i][0]][inp[i][1]] = 1;
        graph[inp[i][1]][inp[i][0]] = 1;
    }

    function DFS(g, v, visit) {
        visit[v] = true;
        dfsAns.push(v);

        for (let i = 0; i < g[v].length; i++) {
            if (g[v][i] == 1) {
                if (!visit[i]) {
                    DFS(g, i, visit);
                }
            }
        }
    }

    function BFS(g, v, visit) {
        let queue = [v];
        visit[v] = true;

        while (queue.length) {
            let node = queue.shift();
            bfsAns.push(node);
            for (let i = 0; i < g[node].length; i++) {
                if (g[node][i] == 1) {
                    if (!visit[i]) {
                        queue.push(i);
                        visit[i] = true;
                    }
                }
            }
        }
    }
    let visitD = Array(inp[0][1]).fill(false);
    let visitB = Array(inp[0][1]).fill(false);
    let dfsAns = [];
    let bfsAns = [];
    DFS(graph, inp[0][2], visitD);
    BFS(graph, inp[0][2], visitB);

    console.log(dfsAns.join(' '));
    console.log(bfsAns.join(' '));
}

function p입국심사(){
    function solution(n, times) {
        let answer = 0;
        let an = [];
        function oK(time, minute){
            let ans = 0;
            for(let i of time){
                ans += Math.floor(minute / i);
            }
            return ans;
        }
        let lt = 0;
        let rt = Number.MAX_SAFE_INTEGER;
        let mid;
        while(lt <= rt){
            mid = Math.floor((lt + rt) / 2);
            if(oK(times, mid) > n){
                rt = mid - 1;
            }else if(oK(times, mid) < n){
                lt = mid + 1;
            }else{
                an.push(mid);
                rt = mid;
            }
            if(lt == rt){
                an.push(lt);
                break;
            }
        }
        answer = Math.min(...an);
        return answer;
    }
}

function b7569() {
    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


}