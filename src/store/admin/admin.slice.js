import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    adminProfile: {
        _id: null,
        email: null,
        password: null,
        photoUrl: null,
    },

};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        adminForgetPasswordValidate: (state, action) => {
            state.isForgetPassword = action.payload;
        },
        adminRegistration: (state, action) => {
            state.adminProfile = action.payload;
        },
        adminSignIn: (state, action) => {
            state.adminProfile = action.payload;
        },
        adminSignOut: (state) => {
            for (const [key, value] of Object.entries(initialState)) {
                if (value !== null && typeof value === 'object') {
                    state[key] = {...value };
                } else {
                    state[key] = value;
                }
            }
        },
        adminUpdateAvatar: (state, action) => {
            state.adminProfile.photoUrl = action.payload;
        },
        adminUpdateProfile: (state, action) => {
            for (const [key, value] of Object.entries(action.payload)) {
                state.adminProfile[key] = value;
            }
        },
    }
});

export const { adminRegistration, adminSignIn, adminSignOut, adminUpdateAvatar, adminUpdateProfile, adminForgetPasswordValidate } = adminSlice.actions;

export const getAdminState = (state) => state.admin;

export default adminSlice.reducer;