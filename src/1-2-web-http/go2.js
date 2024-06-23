// цей файл потрібно буде дописати...

// не звертайте увагу на цю функцію 
// вона потрібна для того, щоб коректно зчитувати вхідні данні
function readHttpLikeInput() {
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for (; ;) {
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) { break; /* windows */ }
        if (buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10)
                break;
            was10++;
        } else
            was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();

const headersNameCase = (header) => {
    return header.toLowerCase().replace(/(^|-)(\w)/g, (_, p1, p2) => p1 + p2.toUpperCase())
}

// ось цю функцію, власне, і треба написати
function parseTcpStringAsHttpRequest(string) {
    const splitedString = string
        .split('\n')
        .filter(row => row);
    const spliedRowWithMethodAndUri = splitedString[0].split(' ');

    const method = spliedRowWithMethodAndUri[0];
    const uri = spliedRowWithMethodAndUri[1];
    const headers = splitedString
        .slice(1, splitedString.length - 1)
        .reduce((acc, row) => {
            const splitedRow = row.split(': ');
            return { ...acc, [headersNameCase(splitedRow[0])]: splitedRow[1] }
        }, {});
    const body = splitedString[splitedString.length - 1];

    return {
        method,
        uri,
        headers,
        body,
    };
}

http = parseTcpStringAsHttpRequest(contents);
console.log(JSON.stringify(http, undefined, 2));