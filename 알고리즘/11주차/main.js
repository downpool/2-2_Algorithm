function solution1() {
    let nandm = gets().split(' ');
    let fromto = gets().split(' ');
    let nodes = gets().split(' ');
    let arr = Array.from(Array(Number(nandm)), () => Array(Number(nandm[0])).fill(Number.MAX_SAFE_INTEGER));
    for (let i = 0; i < arr.length; i++) {
        arr[i][i] = 0;
        let temp = gets().split(' ');
        temp[0] = nodes.indexOf(temp[0]);
        temp[1] = nodes.indexOf(temp[1]);
        temp[2] = Number(temp[2]);
        arr[temp[0]][temp[1]] = temp[2];
        arr[temp[1]][temp[0]] = temp[2];
    }

    let dist = Array(arr.length).fill(Number.MAX_SAFE_INTEGER);
    let prev = Array(arr.length).fill(undefined);
    let visit = Array(arr.length).fill(false);

    function dijkstra(start) {
        let queue = [start];
        dist[start] = 0;
        prev[start] = start;
        visit[start] = true;

        while (queue.length != 0) {
            let node = queue.shift();
            for (let i = 0; i < graph[node].length; i++) {
                if (!visit[node] && graph[node][i] < 1000 && graph[node][i] > 0) {
                    queue.push(i);
                    if (dist[node] + graph[node][i] < dist[i]) {
                        dist[i] = dist[node] + graph[node][i];
                    }
                    visit[node] = true;
                }
            }
        }
    }
    dijkstra(nodes.indexOf(fromto[0]));
    print(ans);
}

function solution1_1() {
    let nandm = gets().split(' ');
    let num = Number(nandm[0]);
    let fromto = gets().split(' ');
    let nodes = gets().split(' ');
    let arr = Array.from(Array(num), () => Array(num).fill(100001));
    for (let i = 0; i < num; i++) {
        arr[i][i] = 0;
    }
    for (let i = 0; i < Number(nandm[1]); i++) {
        let temp = gets().split(' ');
        temp[0] = nodes.indexOf(temp[0]);
        temp[1] = nodes.indexOf(temp[1]);
        temp[2] = Number(temp[2]);
        arr[temp[0]][temp[1]] = temp[2];
        arr[temp[1]][temp[0]] = temp[2];
    }
    let visit = Array(num).fill(false);
    let dist = Array(num).fill(100001);
    let pre = Array(num).fill("");
    function dijkstra(start) {
        for (let i = 0; i < num; i++) {
            dist[i] = arr[start][i];
            pre[i] = nodes[start];
        }
        visit[start] = true;
        for (let i = 0; i < num; i++) {
            let cc = getMinIndex();
            visit[cc] = true;
            for (let j = 0; j < arr.length; j++) {
                if (!visit[j]) {
                    if (dist[cc] + arr[cc][j] < dist[j]) {
                        dist[j] = dist[cc] + arr[cc][j];
                        pre[j] = pre[cc] + nodes[j];
                    }
                }
            }
        }

        function getMinIndex() {
            let min = 100001;
            let index = 0;
            for (let i = 0; i < arr.length; i++) {
                if (dist[i] < min && !visit[i]) {
                    min = dist[i];
                    index = i;
                }
            }
            return index;
        }
    }

    dijkstra(nodes.indexOf(fromto[0]));
    print(pre[nodes.indexOf(fromto[1])]);
    print(dist[nodes.indexOf(fromto[1])]);

}

function solution2() {
    let input = gets();

}

function solution3() {
    let input = gets();

}

// 
const queue = [v];
// 현재 노드 방문
visited[v] = true;

// 큐가 빌 때까지 반복
while (queue.length !== 0) {
    // 큐에서 원소 한 개 뽑아옴
    const node = queue.shift();
    // 방문
    console.log(node);

    // 원소의 인접 노드 탐색
    graph[node].forEach(i => {
        // 방문한 적이 없다면
        if (!visited[i]) {
            // 큐에 추가
            queue.push(i);
            // 방문 처리
            visited[i] = true;
        }
    })
}