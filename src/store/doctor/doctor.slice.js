import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    doctorProfile: {
        userType: null,
        _id: null,
        email: null,
        designation: null,
        specialty: null,
        password: null,
        photoUrl: null,
        institutionName: null,
        gradStart: null,
        gradEnd: null,
        firstName: null,
        lastName: null,
        bloodGroup: null,
        dateOfBirth: null,
        gender: null,
        token: null,
        isVerified: false,
        appointmentFee: null,
        chatRoomId: null,
    },

};

export const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {
        doctorForgetPasswordValidate: (state, action) => {
            state.isForgetPassword = action.payload;
        },
        doctorRegistration: (state, action) => {
            state.doctorProfile = action.payload;
        },
        doctorSignIn: (state, action) => {
            state.doctorProfile = action.payload;
        },
        doctorSignOut: (state) => {
            for (const [key, value] of Object.entries(initialState)) {
                if (value !== null && typeof value === 'object') {
                    state[key] = {...value };
                } else {
                    state[key] = value;
                }
            }
        },
        doctorUpdateAvatar: (state, action) => {
            state.doctorProfile.photoUrl = action.payload;
        },
        doctorUpdateProfile: (state, action) => {
            for (const [key, value] of Object.entries(action.payload)) {
                state.doctorProfile[key] = value;
            }
        },
    }
});

export const { doctorRegistration, doctorSignIn, doctorSignOut, doctorUpdateAvatar, doctorUpdateProfile, doctorForgetPasswordValidate } = doctorSlice.actions;

export const getDoctorState = (state) => state.doctor;

export default doctorSlice.reducer;