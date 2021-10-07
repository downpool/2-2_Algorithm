function solution1() {
    let arr = gets().trim().split(' ');
    if (arr[0].toLowerCase().split('').sort().join('') == arr[1].toLowerCase().split('').sort().join('')) print('True');
    else print('False');

    //----------

    let arr = gets().split(' ');
    let ar1 = new Array(26).fill(0);
    let ar2 = new Array(26).fill(0);
    for (let i = 0; i < arr[0].length; i++) {
        ar1[arr.charCodeAt(i) - String.charCodeAt('a')]++;
        ar2[arr.charCodeAt(i) - String.charCodeAt('a')]++;
    }
    for (let i = 0; i < 26; i++) {
        if (ar1[i] !== ar2[i]) {
            print('False');
            return;
        }
    }
    print('True');
    //아직 정리 못함
}

function solution2() {
    let a = gets().split('');
    let max1 = [0, 0, 1];
    //홀수
    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < i; j++) {
            if (a[i + j] == a[i - j]) {
                if(max1[1] < j){
                    max1[0] = i;
                    max1[1] = j;
                }
            } else break;
        }
    }
    //짝수
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] != a[i + 1]) break;
        for (let j = 1; j < i; j++) {
            if (a[i - j] == a[i + j + 1]) {
                if(max1[1] < j){
                    max1[0] = i;
                    max1[1] = j;
                    max1[2] = 2;
                }
            } else break;
        }
    }
    let ans = a.slice(max1[0] - max1[1], max1[0] + max1[1] + max1[2]); 
    print(ans.join(''));
    // 정석
    // let a = gets().split('');
    // let max = [];
    // for(let i = 0; i < a.length; i++){
    //     for(let j = 0; j < i; j++){

    //     }
    // }

}

function solution3() {
    let inp = gets().split('');
    let score = 0,
        plusScore = 1,
        temp = 0,
        pow = 0;
    for (let i = 0; i < inp.length; i++) {
        if (inp[i] == 'S') {
            pow = 1;
        } else if (inp[i] == 'D') {
            pow = 2;
        } else if (inp[i] == 'T') {
            pow = 3;
        } else {
            if (inp[i] == '*') {
                if (plusScore == 2) {
                    plusScore = 4;
                } else {
                    plusScore = 2;
                }
            } else if (inp[i] == '#') {
                if (plusScore == 2) {
                    plusScore = -2;
                } else {
                    plusScore = -1;
                }
            } else {
                if (inp[i] == 1 && inp[i + 1] == 0) {
                    temp = 10;
                    i++;
                } else {
                    temp = Number(inp[i]);
                }
            }
        }
        //바로 뒷값이 숫자이거나 undefined상태일떄
        if (!isNaN(inp[i + 1]) || (i + 1 == inp.length)) {
            score += Math.pow(temp, pow) * plusScore;
            pow = 0;
            temp = 0;
            if (inp[i] == '*') {
                plusScore = 2;
            } else {
                plusScore = 1;
            }
        }
    }
    print(score);
}


function solutionAdd(dartResult) {
    function pow(num, c) {
        let result = num;
        let a = 0;
        if (c == 'S') a = 1;
        else if (c == 'D') a = 2;
        else a = 3;

        for (let i = 2; i <= a; i++) {
            result = result * num;
        }

        return result;
    }
    // 1. 입력 및 초기화
    let answer = 0;
    let idx = 0;
    let a = [0, 0, 0, 0];
    let size = dartResult.length;

    // 2. 로직 수행
    for (let i = 0; i < size; i++) {
        let cur = dartResult[i];

        // 1) 거듭 제곱 진행합니다.
        if (cur == 'S' || cur == 'D' || cur == 'T') {
            a[idx] = pow(a[idx], cur);
        }
        // 2) 2배를 해줍니다.
        else if (cur == '*') {
            /*
                첫번째 게임인 경우 - 현재 점수 * 2
                두번째, 세번째 게임인 경우 - 현재와 바로 전 점수 * 2
             */
            let start_idx = idx == 1 ? 1 : idx - 1;

            for (let j = start_idx; j <= idx; j++) {
                a[j] = a[j] * 2;
            }
        }
        // 3) 현재 점수를 -1배 합니다.
        else if (cur == '#') {
            a[idx] = a[idx] * -1;
        }
        // 4) 현재 숫자를 검사합니다.
        else {
            // 아스키코드에서 숫자를 추출합니다.
            let num = cur - '0';

            // 만약 10인경우 (길이 2인 문자열)
            if (cur == '1') {
                if (i < size - 1 && dartResult[i + 1] == '0') {
                    num = 10;
                }
            }

            idx++;
            a[idx] = num;
            if (num == 10) i += 1;
        }
    }

    // 3. 결과 합산
    for (let i = 1; i <= 3; i++) {
        answer += a[i];
    }

    // 4. 출력
    return answer;
}
solution3();