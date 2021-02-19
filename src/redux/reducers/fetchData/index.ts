import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseData, IDLE, PENDING, FULFILLED, REJECTED, RequestError } from './types';
import { RootState } from '..';

// Interface for the data that is returned
interface RequestData {
    data: object
}

export const fetchData = createAsyncThunk<RequestData, string, { rejectValue: RequestError }>(
    'fetch/getReq',
    async (url, { rejectWithValue }) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw { message: "Response not ok", status: response.status };
            const json = await response.json();
            // Make a delay so we can see Pending
            await new Promise((resolve) => setTimeout(() => { resolve() }, 2000))
            return json;
        } catch (error) {
            return rejectWithValue({
                errorMessage: error.message,
                responseStatus: error.status ? error.status : -1,
                errorObj: error
            })
        }
    },
    {
        condition: (_url, { getState }) => {
            const state = getState() as RootState;
            if (state.responseData.loading === PENDING) {
                // Fetch in progress, don't need to re-fetch
                return false
            }
        }
    }
);

const initialState: ResponseData = {
    data: {},
    loading: IDLE,
    error: false
}

const fetchSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state: ResponseData) => {
            state.loading = PENDING;
            state.data = {};
            state.error = false;
        })
        builder.addCase(fetchData.fulfilled, (state: ResponseData, action) => {
            state.loading = FULFILLED;
            state.data = action.payload;
            state.error = false;
        })
        builder.addCase(fetchData.rejected, (state: ResponseData, action) => {
            state.loading = REJECTED;
            state.data = {};
            state.error = action.payload;
        })
    },
})

export default fetchSlice.reducer;