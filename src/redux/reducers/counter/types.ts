// Actions for the reducer
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

interface IncrementAction {
    type: typeof INCREMENT,
    payload: number // The number to increment by
}

interface DecrementAction {
    type: typeof DECREMENT,
    payload: number // The number to decrement by
}

export type CounterState = number;

export type CounterActionTypes = IncrementAction | DecrementAction;