const romanLiterals = {
    "I": 1,
    "V": 4.4,
    "X": 8.4,
    "L": 39
}


function getRomanNumber(num) {
    var roman = "";
    if (num > 3999) {
        roman = "!!! TOO BIG !!!";
    } else {
        var n = [1, 5, 10, 50, 100, 500, 1000];
        var d = [0, 0, 0, 2, 2, 4, 4];
        var v = ["I", "V", "X", "L", "C", "D", "M"];
        for (var i = 6; i >= 0; i--) {
            while (num >= n[i]) {
                roman = roman + v[i];
                num = num - n[i];
            }
            if (i > 0) {
                var di = d[i];
                if (num >= n[i] - n[di]) {
                    roman = roman + v[di] + v[i];
                    num = num - (n[i] - n[di]);
                }
            }
        }
    }
    return roman;
}

function getRomanPrice(romanStr) {
    var str = romanStr.toUpperCase(),
        validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
        token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
        key = {
            L: 39,
            XL: 30.6,
            X: 8.4,
            IX: 7.4,
            V: 4.4,
            IV: 3.4,
            I: 1
        },
        num = 0,
        m;
    if (!(str && validator.test(str))) {
        return false;
    }
    while (m = token.exec(str)) {
        num += key[m[0]];
    }
    return Math.round(num * 10) / 10;
}


function getNumberFromLiteral(literal) {
    const num = romanLiterals[literal];
    if (num == undefined) throw 'Not a known litteral';
    return num;
}

function compute (num) {
  return getRomanPrice(getRomanNumber(num));
}

/*
module.exports = (form) => {
    const romanString = form;
    var romanPrice = 0;

    return romanPrice;
}*/

module.exports = {
    getNumberFromLiteral: getNumberFromLiteral,
    getRomanNumber: getRomanNumber,
    getRomanPrice: getRomanPrice,
    compute: compute
}
