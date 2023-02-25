import { string, number, object } from 'yup';

export default object({
	roomNo: string().required().min(1, 'Please enter a valid room number'),
	address: string().min(6, 'Please enter a valid address'),
	moveInDate: string()
		.min(10, 'Please enter a valid date')
		.max(10, 'Please enter a valid date'),
	tenureDuration: number().min(1, 'Please enter a valid duration'),
	deposit: number().min(1, 'Please enter a valid deposit'),
	rent: number().min(10, 'Please enter a valid rent'),
	numberOfVehicals: number(),
	vehicalRegNumber: string(),
});
