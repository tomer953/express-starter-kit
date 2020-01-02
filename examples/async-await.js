
// function to get cats from db \ another async source
// note: when we call this func, we need to use try/catch blocks
exports.getCats = async function getCats() {

    let x = 2;

    // first async call
    x = await cube(x);

    // anoter async call
    x = await square(x);

    // final async call
    return await getNCats(x);
}

// some async functions

function getNCats(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            let ans = [...Array(n).keys()];
            ans.forEach((o,i,a) => a[i] = 'Cat_' + i);
            resolve(ans);
        }, 1000);
    });
}

function square(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.pow(x, 2));
        }, 1000);
    });
}
function cube(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.pow(x, 3));
        }, 1000);
    });
}