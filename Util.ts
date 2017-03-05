function n2m(list: Array<any>, m) {
    // put n item mean to m
    // n >= m
    const r = [];
    const n = list.length;
    let index_n = 0;
    for (let i = 0; i < m; i++) {
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
        f(result => {
            params[i] = result;
            if (!--counter) {
                callback(params);
            }
        });
    });
}

function retryer(func: Function, times: number = 5, timer: number = 1000): Promise<any> {
    return new Promise((resolve, reject) => {
        (function r() {
            func((result) => {
                if (result) {
                    resolve(result);
                } else {
                    if (!--times) {
                        reject(result);
                    }
                    setTimeout(_ => {
                        r();
                    }, timer);
                }
            });
        })();
    });

}

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
for (let i = 1; i < test.length; i++) {
    console.log(n2m(test, i));
}
