module.exports.indexOf = function (a, b) {
    if (a.length < b.length) {
        return -1;
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[j + i] != b[j]) {
                break;
            }
            if (j == b.length - 1) {
                return i;
            }

        }
    }
    return -1;
}