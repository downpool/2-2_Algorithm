//문제 1
function solution1(){
    let arr = gets().split(' ');
    let arr2 = gets().split(' ');
    let answer = '';
    let map = new Map();
    //맵을 이용
    for (let i of arr) {
        //중복선수도 추가
        if (!map.get(i)) {
            map.set(i, 1);
        } else {
            map.set(i, map.get(i) + 1);
        }
    }
    for (let j of arr2) {
        if (map.get(j) > 1) {
            map.set(j, map.get(j) - 1);
        } else {
            map.delete(j);
        }
    }
    //맵에 남아있는 선수 == 완주하지 못한 선수
    map.forEach((_, k) => answer += k);
    print(answer);
}

//문제 2
function solution2(){
    let arr = gets().split(' ');
    let dates = gets().split(' ');
    let sup = gets().split(' ');
    let answer = 0;
    let stock = Number(arr[0]);
    let queue = [];
    for(let i = 0; i < Number(arr[1]); i++){
        //해당 날짜가 되면 그날 보급받을수 있는 포대를 큐에 넣기
        if(dates[0] == i){
            dates.shift();
            queue.push(sup.shift());
        }
        //가장 많은 양의 포대를 스톡에 추가한다.
        if(stock <= 0){
            queue.sort((a, b) => a - b);
            stock += queue.pop();
            //후 카운팅
            answer++;
        }
        //하루가 지남
        stock--;
    }


    print(answer);
}

//문제 3
function solution3(){
    let arr = gets().split(' ');
    while(arr.length > 1){
        //정렬
        arr = arr.sort((a, b) => a - b);
        //큰 행성에서 그다음 큰 행성을 뺀 값을 배열에 추가
        arr.push(arr.pop() - arr.pop());
    }
    //남은 행성 하나 출력
    print(arr[0]);
}
