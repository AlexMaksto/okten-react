import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";

const initialState = {
    pages: 0,
    episodes: [],
    next: null,
    prev: null,
    current: null
}

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const slice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {info: {pages, next, prev}, results} = action.payload;
            state.pages = pages;
            state.episodes = results;
            state.next = next;
            state.prev = prev;
            state.current = null;
        })
});

const {reducer: episodesReducer, actions} = slice

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesReducer,
    episodesActions
}