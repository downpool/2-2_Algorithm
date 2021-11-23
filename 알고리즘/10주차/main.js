function solution1() {
    //c++ 이용
}

//2번
function solution2() {
    let count = Number(gets().trim());
    let wants = gets().split(' ');
    let nodes = {};
    let regions = gets().split(' ');
    //국가 입력
    nodes[regions[0]] = [];
    //시 입력
    for (let i = 1; i < regions.length; i++) {
        nodes[regions[0]].push(regions[i]);
        nodes[regions[i]] = [];
    }
    //구 입력
    for (let i = 1; i < count; i++) {
        let temp = gets().split(' ');
        for (let j = 1; j < temp.length; j++) {
            nodes[temp[0]].push(temp[j]);
        }
    }
    //트리 완성됨//
    let want1 = [wants[0], '', ''];
    let want2 = [wants[1], '', ''];

    let ans = 0;
    for (let i = 2; i >= 0; i--) {
        if (want1[i] == '') break;
        if (want1[i] == want2[i]) {
            ans = want1[i];
            break;
        }
    }
    print(ans);
}

function solution2_2() {
    let a = Number(gets().trim());
    let purpose = gets().split(' ');
    gets();
    let ansarr = Array.from(Array(2), () => Array(3).fill(0));
    ansarr[0][0] = purpose[0];
    ansarr[1][0] = purpose[1];
    for (let i = 1; i < a; i++) {
        let temp = gets().split(' ');
        let cit = temp[0];
        temp.splice(0, 1);
        if (temp.includes(ansarr[0][0]) && ansarr[0][1] == 0) {
            ansarr[0][1] = cit;
            ansarr[0][2] = 'Korea';
        }
        if (temp.includes(ansarr[1][0]) && ansarr[1][1] == 0) {
            ansarr[1][1] = cit;
            ansarr[1][2] = 'Korea';
        }
    }
    let ans = 0;
    if (ansarr[0][2] === ansarr[1][2]) {
        ans = ansarr[0][2];
        if (ansarr[0][1] === ansarr[1][1]) {
            ans = ansarr[0][1];
            //입력된 두 구가 같을경우
            if (ansarr[0][0] === ansarr[1][0]) {
                ans = ansarr[0][0];
            }
        }
    }
    print(ans);
}
//3번
function solution3() {
    gets();
    let nodes = gets().split(' ');
    let target = Number(gets());
    let ansarr = [];
    nodes.forEach((v, i) => {
        let temp = [v, i, Math.abs(target - Number(v))];
        ansarr.push(temp);
    })
    ansarr.sort((a, b) => {
        if (a[2] != b[2]) {
            return a[2] - b[2];
        } else {
            return a[1] - b[1];
        }
    })
    let i = Number(gets());
    let ans = [];
    for (let j = 0; j < i; j++) {
        ans.push(ansarr[j][0]);
    }
    //이게 왜 되지?

    print(ans.join(' '));
}