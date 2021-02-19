import { INCREMENT, DECREMENT, CounterActionTypes } from './types';

export const increment = (payload: number = 1): CounterActionTypes => {
    return {
        type: INCREMENT,
        payload
    }
}

export const decrement = (payload: number = 1): CounterActionTypes => {
    return {
        type: DECREMENT,
        payload
    }
}