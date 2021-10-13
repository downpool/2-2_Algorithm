function solution(pati, comp) {
    let answer = '';
    let map = new Map();
    for (let i of pati) {
        if (!map.get(i)) {
            map.set(i, 1);
        } else {
            map.set(i, map.get(i) + 1);
        }
    }
    for (let j of comp) {
        if (map.get(j) > 1) {
            map.set(j, map.get(j) - 1);
        } else {
            map.delete(j);
        }
    }

    map.forEach((k, v, m) => answer += v);
    return answer;
}