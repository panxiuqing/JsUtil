const enum Method {
    Put,
    Delete,
    Post,
    Get
}

interface Option {
    path: string;
}

type Payload = any;

type ArrayTransferable = [Method, Option, Payload];

interface Sync {
    (arrayTransfered: ArrayTransferable): boolean;
}