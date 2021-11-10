function solution1_1() {
    let input = gets().split(' ');
    let nodes = gets().split(' ');
    let ans = 0;
    //입력
    let edge = Array.from(Array(Number(input[1])), () => Array(3));
    for (let i = 0; i < Number(input[1]); i++) {
        let line = gets().split(' ');
        edge[i][0] = Number(line[2]);
        edge[i][1] = line[0];
        edge[i][2] = line[1];
    }

    //union find 연산
    function find_parent(parent, x) {
        if (parent[parent.indexOf(x)] != x) {
            parent[parent.indexOf(x)] = find_parent(parent, parent[parent.indexOf(x)]);
        }
        return parent[parent.indexOf(x)];
    }

    function union_parent(parent, a, b) {
        a = find_parent(parent, a);
        b = find_parent(parent, b);
        if (a < b) {
            parent[parent.indexOf(b)] = a;
        } else {
            parent[parent.indexOf(a)] = b;
        }
    }

    print(ans);
}

function solution1_2_sol() {
    let input = gets().split(' ');
    let node = gets().split(' ');
    let nodes = node.slice();
    let ans = 0;
    //입력
    let edge = Array.from(Array(Number(input[1])), () => Array(3));
    for (let i = 0; i < Number(input[1]); i++) {
        let line = gets().split(' ');
        edge[i][0] = Number(line[2]);
        edge[i][1] = line[0];
        edge[i][2] = line[1];
    }

    edge = edge.sort((a, b) => {
        return a[0] >= b[0] ? 1 : -1;
    });

    function UnionNode(parent, child) {
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i] == child) {
                nodes[i] = parent;
            }
        }
    }
    for (let i of edge) {
        if (nodes[node.indexOf(i[1])] == nodes[node.indexOf(i[2])]) continue;
        if (nodes[node.indexOf(i[1])] != i[1]) {
            UnionNode(nodes[node.indexOf(i[1])], i[2]);
        } else if (nodes[node.indexOf(i[2])] != i[2]) {
            UnionNode(nodes[node.indexOf(i[2])], i[1]);
        } else {
            UnionNode(i[1], i[2]);
        }
        ans += i[0];
    }
    print(ans);
}

function solution2_1() {
    let input = gets().split(' ');
    let node = gets().split(' ');
    //입력
    let edge = Array.from(Array(Number(input[1])), () => Array(3));
    for (let i = 0; i < Number(input[1]); i++) {
        let line = gets().split(' ');
        edge[i][0] = Number(line[2]);
        edge[i][1] = line[0];
        edge[i][2] = line[1];
    }

    edge = edge.sort((a, b) => {
        return a[0] >= b[0] ? 1 : -1;
    });

    
    function union(li) {
        let ans = 0;
        let nodes = node.slice();
        for (let i of li) {
            if (nodes[node.indexOf(i[1])] == nodes[node.indexOf(i[2])]) continue;
            if (nodes[node.indexOf(i[1])] != i[1]) {
                UnionNode(nodes[node.indexOf(i[1])], i[2]);
            } else if (nodes[node.indexOf(i[2])] != i[2]) {
                UnionNode(nodes[node.indexOf(i[2])], i[1]);
            } else {
                UnionNode(i[1], i[2]);
            }
            ans += i[0];
        }
        function UnionNode(parent, child) {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i] == child) {
                    nodes[i] = parent;
                }
            }
        }
        return ans;
    }
    let ansarr = [];
    let m = union(edge);
    for(let j = 0; j < edge.length; j++){
        let cop = edge.slice();
        cop.splice(j, 1);
        if(union(cop) > m){
            ansarr.push(union(cop));
        }
    }
    ansarr.sort((a, b) => a - b);
    print(ansarr[0]);
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