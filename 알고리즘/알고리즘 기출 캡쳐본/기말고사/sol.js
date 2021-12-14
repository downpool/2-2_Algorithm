function solone() {
    let base = gets().split(' ');
    let power = gets().split(' ');
    for (let i = 0; i < base.length; i++) {
        base[i] = Number(base[i]);
    }
    for (let i = 0; i < power.length; i++) {
        power[i] = Number(power[i]);
    }
    base.sort();
    power.sort();

    function okPower(basearr, power, powerarr) {
        for (let i of basearr) {
            let ok = false;
            for (let j of powerarr) {
                if (j - power <= i && j + power >= i) {
                    ok = true;
                }
            }
            if (!ok) return false;
        }
        return true;
    }
    let bi = Math.max((Math.max(...base) - power[0]), (Math.max(...power), base[0]));
    let ans = bi;
    while (true) {
        if (okPower(base, bi, power)) {
            bi = Math.floor(bi / 2) - 1;
        } else {
            bi += 1;
        }
        if (!okPower(base, bi, power) && okPower(base, bi + 1, power)) {
            ans = bi + 1;
            break;
        }
    }
    print(ans);


}

function soltwo() {
    let size = gets().split(' ');
    

}

function solthr() {


}

function solfour() {


}

function solfive() {


}