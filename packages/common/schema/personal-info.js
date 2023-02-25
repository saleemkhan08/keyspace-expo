import { string, object, number } from 'yup';

export default object({
	fatherName: string().required().min(3, 'Please enter a valid name'),
	phoneNumber: string()
		.required()
		.matches(/^[0-9]+$/, 'Please enter a valid phone number')
		.min(10, 'Phone number must contain 10 digits')
		.max(10, 'Phone number must contain 10 digits'),
	permanentAddress: string().required().min(6, 'Please enter a valid address'),
});
