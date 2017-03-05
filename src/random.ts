/**
 * get random int number A, min <= A < max
 * @param max 
 * @param min
 */
function randomInt(max: number, min: number = 0): number {
    return min + Math.floor(Math.random() * (max - min));
}


function randomList(list: Array<any>): Array<any> {
    return list.map(v => v).sort(() => Math.random() - 0.5);
}

function* randomItem(list: Array<any>, randomMethod: Function = randomInt): any {
    const length = list.length
    while (true) {
        yield list[randomMethod(length)];
    }
}

function* randomUniqueItem(list: Array<any>, randomMethod: Function = randomInt): any {
    let rist = randomList(list);
    while (true) {
        yield rist.pop();
        if (!rist.length) {
            rist = randomList(rist);
        }
    }
}

