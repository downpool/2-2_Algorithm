function solution1_1() {
    let input = gets().split(' ');
    let nodes = gets().split(' ');
    let ans = 0;
    //입력
    let edge = Array.from(Array(Number(input[1])), () => Array(3));
    for(let i = 0; i < Number(input[1]); i++){
        let line = gets().split(' ');
        edge[i][0] = Number(line[2]);
        edge[i][1] = line[0];
        edge[i][2] = line[1];
    }

    //union find 연산
    function find_parent(parent, x){
        if(parent[x] != x){
            parent[x] = find_parent(parent, parent[x]);
        }
        return parent[x];
    }

    function union_parent(parent, a, b){
        a = find_parent(parent, a);
        b = find_parent(parent, b);
        if(a < b){
            parent[b] = a;
        }else{
            parent[a] = b;
        }
    }
    //
    edge = edge.sort((a, b) => {
        if(a[0] != b[0]){
            return a[0] - b[0];
        }else{
            return a > b ? a : b;
        }
    });

    for(let i of edge){
        if(find_parent(nodes, i[1]) != find_parent(nodes, i[2])){
            union_parent(nodes, i[1], i[2]);
            ans += i[0];
        }
    }
    print(ans);
}

function solution2_1() {

}

function solution3_1() {

    // function solution(n, stations, w) {
    //     var answer = 0;
    //     var startIndex = 0;
    //     for (var i = 0; i < stations.length; i++) {
    //         var toReachIndex = stations[i] - w - 1;
    //         answer += Math.ceil((toReachIndex - startIndex) / ((2 * w) + 1));
    //         startIndex = stations[i] + w;
    //     }
    //     answer += Math.ceil((n - startIndex) / ((2 * w) + 1));
    //     return answer;
    // }

}

function solution4_1() {


}