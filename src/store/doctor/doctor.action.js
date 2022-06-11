import store from '../store';
import { doctorSignIn, doctorSignOut } from './doctor.slice';

/**
 * Set app user if credentials are valid
 * @param data
 */




export const setDoctor = (data) => {
    console.log('doctors dayaaaa', data);
    const { token, ...rest } = data;
    store.dispatch(doctorSignIn(rest));
    // store.dispatch(authPopup({ isActive: false, type: null }));
    // store.dispatch(setGlobeData());
};

/**
 * Revoke app user access
 */
export const revokeAuthDoctor = () => {
    return new Promise((resolve) => {
        store.dispatch(doctorSignOut());
        // store.dispatch(clearCart());
        // store.dispatch(clearNotifications());
        resolve();
    });
};

/**
 * Set global data such as `cart count`, `notifications`
 */
// export const setGlobeData = () => {
// 	return async (dispatch) => {
// 		try {
// 			const promise1 = await cartAPI.getCartSummary();
// 			const promise2 = await notificationAPI.getNotifications('all');
// 			const promise3 = await notificationAPI.getNotificationCount();
// 			const [res1, res2, res3] = await Promise.allSettled([promise1, promise2, promise3]);
// 			// if (res1.status === 'fulfilled') {
// 			// 	const { success, data } = res1.value;
// 			// 	if (success) dispatch(updateCart(data));
// 			// }
// 			// if (res2.status === 'fulfilled') {
// 			// 	const {
// 			// 		success,
// 			// 		data: { notifications },
// 			// 	} = res2.value;
// 			// 	if (success) dispatch(updateNotifications(notifications));
// 			// }
// 			// if (res3.status === 'fulfilled') {
// 			// 	const { success, data } = res3.value;
// 			// 	if (success) dispatch(updateNotificationCount(data));
// 			// }
// 		} catch (error) {}
// 	};
// };