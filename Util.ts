function n2m(list: Array<any>, m) {
    // put n item mean to m
    // n >= m
    const r = [];
    const n = list.length;
    let index_n = 0;
    for (let i = 0; i < m; i ++) {
        const num = Math.round((n - index_n) / (m - i));
        r.push(list.slice(index_n, index_n + num));
        index_n += num;
    }
    return r;
}

// function as Promise.all
function all(functionList: Array<Function>, callback: Function) {
    const params = [];
    let counter = functionList.length;
    functionList.forEach((f, i) => {
        f((result) => {
            params[i] = result;
            if (!--counter) {
                callback(params);
            }
        });
    });
}

function retryer(func, success, times, timer) {
    times = times || 5;
    timer = timer || 1000;
    (function r() {
        func((result) => {
            if (result) {
                success(result);
            } else {
                if (!--times) {
                    return;
                }
                setTimeout(_ => {
                    r();
                }, timer);
            }
        })
    })();
}

const test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
for (let i = 1; i < test.length; i ++) {
    console.log(n2m(test, i));
}
