//문제 1번
function solution1() {
    //기본적인 출력임
    print("Hello, Algorithm");
}
//문제 2번
function solution2() {
    //입력을 받고 변수에 저장함
    let i = gets();
    //저장된 입력값을 출력함
    print(i);
}
//문제 3번
function solution3() {
    //입력을 받고 숫자로 변환함
    let i = Number(gets());
    //홀수 짝수를 구분하여 출력함
    i % 2 == 0 ? print('even') : print('odd');
}
//문제 4번
function solution4() {
    //입력을 받고 입력값을 공백으로 구분하여 배열로 저장함
    let i = gets().split(' ');
    let j = gets().split(' ');
    //기본적인 sort함수를 쓰면 문자열 기준으로 정렬이 이루어지므로 
    //함수를 추가하여 숫자 자료형으로 정렬하게 함
    j = j.sort((a, b) => a - b);
    //주어진 순서의 값을 구해 숫자형으로 변환후 더하고 출력함
    //그냥 출력하면 문자열형 덧셈이 되므로 숫자로 변환후 출력함
    print(Number(j[i[1] - 1]) + Number(j[j.length - i[2]]));
}