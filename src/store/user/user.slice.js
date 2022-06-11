import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    popup: {
        isActive: null,
    },
    profile: {
        _id: null,
        firstName: null,
        lastName: null,
        photoUrl: '/images/avatar.jpg',
        email: null,
        dateOfBirth: null,
        bloodGroup: null,
        gender: null,
        phoneNumber: null,
        city: null,
        address: null,
        state: null,
        country: null,
        userType: null,
        zipCode: null,
        age: null,
        chatRoomId: null,
    },
    isForgetPassword: false,
    isOldUser: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        oldUserValidate: (state, action) => {
            // console.log(state, action);
            state.isOldUser = action.payload;
        },
        forgetPasswordValidate: (state, action) => {
            state.isForgetPassword = action.payload;
        },
        authPopup: (state, action) => {
            // console.log(state, action);
            state.popup = action.payload;
        },
        registration: (state, action) => {
            state.profile = action.payload;
        },
        authSignIn: (state, action) => {
            state.profile = action.payload;
        },
        authSignOut: (state) => {
            for (const [key, value] of Object.entries(initialState)) {
                if (value !== null && typeof value === 'object') {
                    state[key] = {...value };
                } else {
                    state[key] = value;
                }
            }
        },
        authUpdateAvatar: (state, action) => {
            state.profile.avatarURL = action.payload;
        },
        authUpdateProfile: (state, action) => {
            for (const [key, value] of Object.entries(action.payload)) {
                state.profile[key] = value;
            }
        },
    }
});

export const { authPopup, registration, authSignIn, authSignOut, authUpdateAvatar, authUpdateProfile, oldUserValidate, forgetPasswordValidate } = userSlice.actions;

export const getUserState = (state) => state.user;

export default userSlice.reducer;