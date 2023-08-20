import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services";

const initialState = {
    characters: []
};

const getByIds = createAsyncThunk(
    'charactersSlice/getByIds',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await charactersService.getByIds(ids);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const slice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getByIds.fulfilled, (state, action) => {
            state.characters = action.payload
        })
});

const {reducer: charactersReducer, actions} = slice;

const charactersActions = {
    ...actions,
    getByIds
}

export {
    charactersActions,
    charactersReducer
}