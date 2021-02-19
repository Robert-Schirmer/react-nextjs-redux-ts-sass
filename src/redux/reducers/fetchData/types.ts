
// Loading statuses
export const PENDING = 'PENDING';
export const FULFILLED = 'FULFILLED';
export const IDLE = 'IDLE';
export const REJECTED = 'REJECTED';

type Loading = typeof PENDING | typeof FULFILLED | typeof IDLE | typeof REJECTED;

export interface RequestError {
    errorMessage: string,
    responseStatus: number,
    errorObj?: any
}

export interface ResponseErrorObj {
    response: object,
    statusText: string
}

export type ResponseError = RequestError | false | undefined;

export interface ResponseData {
    data: object,
    loading: Loading,
    error: ResponseError
}