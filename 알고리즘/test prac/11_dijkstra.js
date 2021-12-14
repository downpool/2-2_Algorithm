let nm = gets().split(' ');
let toans = gets().split(' ');
let nodes = gets().split(' ');
let dist = {};
let visit = {};
let graph = {};
let from = {};
for (let i of nodes) {
    graph[i] = [];
    dist[i] = 100000000;
    visit[i] = false;
    tracking[i] = i;
}
for (let i = 0; i < Number(nm[1]); i++) {
    let temp = gets().split(' ');
    graph[temp[0]].push([temp[1], Number(temp[2])]);
}

dist[toans[0]] = 0;
tracking[toans[0]] = -1;
for (let j = 0; j < nodes.length - 1; j++) {
    let m = 100000001;
    let x = -1;
    for (let i of nodes) {
        if (!visit[i] && m > dist[i]) {
            m = dist[i];
            x = i;
        }
    }
    visit[x] = true;
    graph[x].forEach(e => {
        if (dist[e[0]] > dist[x] + e[1]) {
            dist[e[0]] = dist[x] + e[1];
            tracking[e[0]] = x;
        }
    })
}


print(tracking[toans[1]]);
print(dist[toans[1]]);