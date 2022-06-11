export {
    authPopup,
    authSignIn,
    authSignOut,
    authUpdateAvatar,
    authUpdateProfile,
    getUserState,
}
from './user/user.slice';

export {
    adminRegistration,
    adminSignIn,
    adminSignOut,
    adminUpdateAvatar,
    adminUpdateProfile,
    adminForgetPasswordValidate,
    getAdminState
}
from './admin/admin.slice';
export {
    doctorRegistration,
    doctorSignIn,
    doctorSignOut,
    doctorUpdateAvatar,
    doctorUpdateProfile,
    doctorForgetPasswordValidate,
    getDoctorState
}
from './doctor/doctor.slice';