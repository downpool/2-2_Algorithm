function solution1() {
    let a = gets().split(' ');
    let b = gets().split(' ');
    let cnt = 0;
    for (let i = 0; i < a[0]; i++) {
        for (let j = 1; j < a[0]; j++) {
            if (a[2] == 'A') {
                if (b[j - 1] > b[j]) {
                    let temp = b[j - 1];
                    b[j - 1] = b[j];
                    b[j] = temp;
                }
            } else {
                if (b[j - 1] < b[j]) {
                    let temp = b[j - 1];
                    b[j - 1] = b[j];
                    b[j] = temp;
                }
            }
        }
        cnt++;
        if (cnt == a[1]) break;
    }
    print(b.join(' '));
}

function solution2() {
    let a = gets().split(' ');
    let b = gets().split(' ');
    let cnt = Number(a[1]);
    let rev = a[2];
    let ok = false;
    let count = 0;

    function mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }

        let mid = Math.floor(arr.length / 2);

        let left = arr.slice(0, mid);
        let right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right));

        function merge(left, right) {
            let resultarr = [];
            let lindex = 0;
            let rindex = 0;

            while (lindex < left.length && rindex < right.length && !ok) {
                if (count == cnt) {
                    ok = true;
                    break;
                }
                if (rev == 'A') {
                    if (left[lindex] <= right[rindex]) {
                        resultarr.push(left[lindex]);
                        lindex++;
                    } else {
                        resultarr.push(right[rindex]);
                        rindex++;
                    }
                } else {
                    if (left[lindex] > right[rindex]) {
                        resultarr.push(left[lindex]);
                        lindex++;
                    } else {
                        resultarr.push(right[rindex]);
                        rindex++;
                    }
                }
                count++;
                
            }
            return resultarr.concat(left.slice(lindex), right.slice(rindex));
        }
    }

    b = mergeSort(b);

}
//문제 2
function solution2_2(){
    let a = gets().split(' ');
    let b = gets().split(' ');
    let count = 0;
    let ok = false;
    let cnt = Number(a[1]);

    function mergeSort(m){
        if(m.length <= 1){
            return m;
        }
        let mid = Math.floor(m.length / 2);

        let left = m.slice(0, mid);
        let right = m.slice(mid);

        left = mergeSort(left);
        right = mergeSort(right);

        return merge(left, right);

        function merge(left, right){
            let result = [];
            if(count == cnt) {
                return result = left.concat(right);
            }
            while(left.length != 0 && right.length != 0){
                if(a[2] == 'A'){
                    if(left[0] <= right[0]){
                        result.push(left[0]);
                        left.shift();
                    }else{
                        result.push(right[0]);
                        right.shift();
                    }
                }else{
                    if(left[0] > right[0]){
                        result.push(left[0]);
                        left.shift();
                    }else{
                        result.push(right[0]);
                        right.shift();
                    }
                }
            }
            while(left.length != 0){
                result.push(left[0]);
                left.shift();
            }
            while(right.length != 0 && !ok){
                result.push(right[0]);
                right.shift();
            }
            count++;
            return result;
        }
    }

    print(mergeSort(b).join(' '));
}

//문제 3
function solution3() {
    let a = gets().split(' ');
    let leng = a.length;
    let sorted = Array.from(Array(leng), () => Array(3).fill(0)); // 단어별로 에너그램화 되어있음
    for (let i = 0; i < a.length; i++) {
        sorted[i][0] = a[i].toLowerCase();
        sorted[i][1] = '';
        sorted[i][2] = 0;
    }
    for (let i = 0; i < a.length; i++) {
        sorted[i][1] = sorted[i][0].split('').sort().join('');
        for (let j = 0; j <= i; j++) {
            if (sorted[i][1] == sorted[j][1]) {
                sorted[j][2]++;
                sorted[j].push(sorted[i][0]);
                break;
            }
        }
    }

    for (let i = 0; i < sorted.length; i++) {
        sorted[i] = sorted[i].slice(3).sort();
    }
    sorted = sorted.filter((e) => e.length !== 0);
    sorted.sort((a, b) => {
        return a > b ? 1 : -1;
    });
    for (let i of sorted) {
        print(i.join(' '));
    }
    // a의 몇번째와 에너그램이 같은지
}