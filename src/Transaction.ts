class Transaction {
    constructor (public funcList: Array<Function>, public rollback: Function) {

    }

    async run(params) {
        try {
            for (let i in this.funcList) {
                params = await this.funcList[i](params);
            }
            return params;
        } catch (e) {
            this.rollback();
        }
    }
}