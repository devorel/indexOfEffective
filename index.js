function indexOf(a, b) {
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

function lastIndexOf(a, b) {
    if (a.length < b.length) {
        return -1;
    }
    let j = b.length;
    for (let i = a.length - 1; i > -1; i--) {
        j--;
        if (a[i] != b[j]) {
            i += b.length - j - 1;
            j = b.length;
            continue;
        }
        if (j == 0) {
            return i;
        }

    }
    return -1;
}

module.exports = {indexOf: indexOf, lastIndexOf: lastIndexOf};
