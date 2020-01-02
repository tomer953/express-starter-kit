var rp = require('request-promise');

// using then, catch
function getGoogle_ex1() {
    rp('http://www.google.com')
    .then(function (response) {
        // resolved
    })
    .catch(function (err) {
        // rejected
    });
}

// using async await
async function getGoogle_ex2() {
    try {
        let google = await rp('http://www.google.com')
    } catch (err) {
        console.error(err);
    }
}