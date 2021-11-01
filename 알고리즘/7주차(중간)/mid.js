//1주차 
//표준 입력 및 출력
function sol1_1() {
    let input = gets();
    print(input);
}
//홀수 짝수
function sol1_2() {
    let n = Number(gets().trim());
    let answer = '';
    if (n % 2 == 0) {
        answer = 'even';
    } else {
        answer = 'odd';
    }
    print(answer);
}
//은행 대기열
function sol1_3() {
    let waitingList = gets().split(' ');
    let array = gets().split(' ');

    array.sort((a, b) => a - b);
    let n = Number(waitingList[0]);
    let k = Number(waitingList[1]);
    let i = Number(waitingList[2]);
    let answer = Number(array[k - 1]) + Number(array[n - i]);

    print(answer);
}

//2주차
//피보나치 수열
function sol2_1() {
    let n = Number(gets().trim());

    //재귀 함수형
    function fibo(x) {
        if (x <= 1) {
            return x;
        } else {
            return fibo(x - 1) + fibo(x - 2);
        }
    }
    let answer = fibo(n);
    print(answer);

    //메모이제이션
    let arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    print(arr[n]);
}

//유클리드 호제법
function sol2_2() {
    let input = gets().split(' ');
    let i = Number(input[0]);
    let j = Number(input[1]);

    function gcd(a, b) {
        let r = a % b;
        if (r == 0) {
            return b;
        } else {
            return gcd(b, r);
        }
    }

    let answer = gcd(i, j);

    print(answer);
}

//피라미드
function sol2_3() {
    let n = Number(gets().trim());
    let memo = Array.from(Array(n + 1), () => Array(n + 1).fill(-1));

    function comb(a, b) {
        if(memo[a][b] >= 0){
            return memo[a][b];
        }
        if(a == b || b == 0){
            memo[a][b] = 1;
            return memo[a][b];
        }else{
            memo[a][b] = comb(a - 1, b - 1) + comb(a - 1, b);
            return memo[a][b];
        }
    }
    let answer = 0;
    //하키스틱 법칙 이용
    for(let i = 1; i <= n; i++){
        answer += comb(n, i);
    }

    print(answer);
}

//계단오르기
function sol2_4() {
    let input = gets().split(' ');
    let n = Number(input[0]);
    let m = Number(input[1]);

    let answer = 0;
    function stair(l, max){
        //계단이 한칸 또는 0칸 남았을때
        if(l == 0){
            answer++;
            return;
        }else if(l < 0){
            return;
        }else{
            for(let i = 1; i <= max; i++){
                stair(l - i, max);
            }
        }
    }
    stair(n, m);

    print(answer);
}

//대체수업
//핸드폰 번호 가리기
function sol_ex_1(){
    let input = gets();
    //정규식 사용
    let answer = '';
    answer = input.replace(/-/g, '').replace(/\d(?=\d{4})/g, '*');
    print(answer);
    
    //문자열 이용 ??
    let arr = input.replace(/-/g, '');
}

//3주차
//애너그램 판별

function sol3_1(){
    let input = gets().split(' ');
    if(input[0].toLowerCase().split('').sort().join('') == input[1].toLowerCase().split('').sort().join('')){
        print('True');
    }else{
        print('False');
    }

}
//가장 긴 회문
//투포인터 사용
function sol3_2(){
    let input = gets().trim();

    function isPalindrom(a){
        if(a == a.split('').reverse().join('')){
            return true;
        }else{
            return false;
        }
    }
    let ans = '';
    //홀수
    let lt = 0;
    for(let rt = 1; rt < input.length; rt++){
        while(!isPalindrom(temp)){
            let temp = input.substring(rt - lt, rt + lt);
        }
        
    }
    //짝수
    lt = 0;
    for(let rt = 2; rt < input.length; rt++){
        let temp = input.substring(lt, rt);
        if(isPalindrom(temp)){
            ans = ans.length < temp.length ? temp : ans; 
            if(lt > 0) lt--;
        }else{
            lt++;
        }
    }
    print(ans);

}
//다트게임 점수계산
function sol3_3(){
    let input = gets().split('');
    let answer = 0;
    let temp = 0;
    let pow = 1;
    for(let i = 0; i < input.length; i++){
        if(!Number.isNaN(input[i])){
            if(input[i] == 'S'){
                pow = 1;
            }else if(input[i] == 'D'){
                pow = 2;
            }else if(input[i] == 'T'){
                pow = 3;
            }else{
                
            }
            if(input[i + 1] == '#'){
                temp = Math.pow(temp, pow);
                answer += temp;
                temp = 1;
                i++;
            }else if(input[i + 1] == '*'){
                temp *= 2;
                answer += temp;
                temp = 2;
                i++;
            }else{
                answer += temp;
                temp = 1;
            }
            
        }else{
            if(input[i] == 1){
                if(input[i + 1] == 0){
                    temp = 10;
                    i++;
                }else{
                    temp = 1;
                }
            }else{
                temp = input[i];
            }
        }

    }
    
}

function sol4_1(){
    let input = gets().split(' '); 

    let arr = Array.from(Array(input.length), () => Array());
    for(let i = 0; i < arr.length; i++){
        arr[i].push(input[i]);
        arr[i].push(input[i].split('').sort().join(''));
    }
    for(let j = 0; j < arr.length; j++){
        for(let k = 0; k < arr.length; k++){
            if(arr[k][1] == arr[j][1]){
                arr[k].push(arr[j][0]);
                arr.splice(k , 1);
                j--;
                break;
            }
        }
    }
    for(let arr)

    
}

function sol4_2(){

    
}
