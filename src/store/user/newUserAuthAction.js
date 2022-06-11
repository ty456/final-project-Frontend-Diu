// import authServices from "../../libs/api/authServices"
// import { authAPI } from "../../libs/api/newAuthServices"
// import store from "../store"
// import { authPopup, authSignIn, forgetPasswordValidate, oldUserValidate } from "./user.slice"

// export const signIn = (payload) => {
//     return (dispatch) => {
//         authAPI.authSignin(payload)
//             .then((data) => {
//                 dispatch(authSignIn(data))
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }
// }
// export const authRegistration = (payload) => {
//     return (dispatch) => {
//         authServices.authRegistration(payload)
//             .then((data) => {
//                 dispatch({
//                     payload: data
//                 })
//             })
//     }
// }
// export const setOldUser = (data) => {
//     // console.log('user login', data);
//     store.dispatch(oldUserValidate(data));
// }

// export const setForgetPassword = (data) => {
//     store.dispatch(forgetPasswordValidate(data));
// };

// export const setPopUp = (data) => {
//     console.log('popup', data)
//     store.dispatch(authPopup(data));
// }