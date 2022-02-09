module.exports.indexOf = function (a, b) {
    if (a.length < b.length) {
        return -1;
    }
    let j = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[j]) {
            i -= j;
            j = 0;
            continue;
        }
        if (j == b.length - 1) {
            return i - b.length + 1;
        }
        j++;
    }
    return -1;
}
