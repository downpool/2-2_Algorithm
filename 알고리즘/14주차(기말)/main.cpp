#include <iostream>
using namespace std;
unsigned long long int arr[102];

unsigned long long int fibo(int n){
	if(n <= 1) return 1;
	if(arr[n] != 0) return arr[n];
	return arr[n] = fibo(n - 1) + fibo(n - 2);
}
int main(){
	ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    arr[1] = 0;
    arr[2] = 1;
    arr[3] = 1;
	int a;
	cin >> a;
	cout << fibo(a + 1);

	return 0;
}
