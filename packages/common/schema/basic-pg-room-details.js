import { string, number, object } from 'yup';

export default object({
	roomNo: string().required().min(1, 'Please enter a valid room number'),
	floor: string().required().min(1, 'Please enter a valid floor number'),
	sharing: number().required().min(1, 'Please enter a valid sharing count'),
});
