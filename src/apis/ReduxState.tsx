import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { AdminData } from "./Allinterface";

const initialState = {
    currentUser: {} as AdminData | null
}

const ReduxState = createSlice({
    name: "Food_Inquiry",
    initialState,
    reducers: {
        Admin: (state, { payload }: PayloadAction<AdminData>) => {
            state.currentUser = payload
        },

        logoutAdmin: (state) => {
            state.currentUser = null
        }
    }
});

export const { Admin,logoutAdmin } = ReduxState.actions;

export default ReduxState.reducer;