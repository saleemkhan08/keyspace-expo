import { string, object } from 'yup';

export default object({
	occupation: string().required().min(3, 'Please enter a valid occupation'),
	name: string().required().min(3, 'Please enter a valid name'),
	address: string().required().min(6, 'Please enter a valid address'),
	phoneNumber: string()
		.required()
		.matches(/^[0-9]+$/, 'Please enter a valid phone number')
		.min(10, 'Phone number must contain 10 digits')
		.max(10, 'Phone number must contain 10 digits'),
	email: string().required().email(),
});
