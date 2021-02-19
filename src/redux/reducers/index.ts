import { combineReducers } from 'redux';
import counterReducer from './counter';
import dataFetchReducer from './fetchData';

// Combine all available reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    responseData: dataFetchReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;