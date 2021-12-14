let inp = gets().split(' ');
inp[0] = Number(inp[0]);
inp[1] = Number(inp[1]);

let nodes = gets().split(' ');
let graph = Array.from(Array(), () => Array(3));
let parent = {};
for(let i of nodes){
	parent[i] = i;
}
for(let i = 0; i < inp[1]; i++){
	let temp = gets().split(' ');
	temp[2] = Number(temp[2]);
	graph.push([temp[2], temp[0], temp[1]]);
}

graph.sort((a, b) => {
	if(a[0] != b[0]){
		return a[0] - b[0];
	}else{
		return a[1] > b[1] ? 1 : -1;
	}
})

function find(a){
	if(a == parent[a]){
		return a;
	}else{
		return parent[a] = find(parent[a]);
	}
}

function union(a, b){
	a = find(a);
	b = find(b);
	parent[a] = b;
}
let ans = 0;

for(let i = 0; i < graph.length; i++){
	let x = find(graph[i][1]);
	let y = find(graph[i][2]);
	if(x != y){
		union(x, y);
		ans += graph[i][0];
	}
}

print(ans);