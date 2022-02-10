const {indexOf,lastIndexOf} = require('./index');

function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function testIndexOf() {
    for (let i = 0; i < 1000000; i++) {
        let a = makeid(12);
        let b = makeid(Math.floor(Math.random() * 2) + 1);
        if (a.indexOf(b) != indexOf(a, b)) {
            console.log({'error': [a, b]});
            return;
        }
    }
    console.log('indexOf ok');
}

function testLastIndexOf() {
    for (let i = 0; i < 1000000; i++) {
        let a = makeid(12);
        let b = makeid(Math.floor(Math.random() * 2) + 1);
        if (a.lastIndexOf(b) != lastIndexOf(a, b)) {
            console.log({'error': [a, b]});
            return;
        }
    }
    console.log('lastIndexOf ok');
}

testIndexOf();
testLastIndexOf();