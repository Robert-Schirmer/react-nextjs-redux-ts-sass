import { INCREMENT, DECREMENT, CounterActionTypes, CounterState } from "./types";

const initialState: number = 0;

const counterReducer = (state = initialState, action: CounterActionTypes): CounterState => {
    
    const countBy = action.payload ? action.payload : 1;

    switch (action.type) {
        case INCREMENT:
            return state + countBy;
        case DECREMENT:
            return state - countBy;
        default:
            return state
    }
}

export default counterReducer;