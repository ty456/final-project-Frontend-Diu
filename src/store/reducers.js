import { combineReducers } from '@reduxjs/toolkit';
import user from './user/user.slice';
import admin from './admin/admin.slice';
import doctor from './doctor/doctor.slice';

const rootReducer = combineReducers({
    user,
    admin,
    doctor
});
export default rootReducer;