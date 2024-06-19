import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'auth/signin',
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_baseURL}/api/auth/login`, payload);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const initialState = {
    token: "",
    user: null,

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.token = "";
            state.user = null;
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
                localStorage.setItem("token", token);
            })
            .addCase(login.pending, (state) => {

            })
            .addCase(login.rejected, (state) => {
            })
    }
})

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
