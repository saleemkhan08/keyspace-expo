import { string, number, object } from 'yup';

export default object({
	doorNo: string().required().min(1, 'Please enter a valid door number'),
	flatType: string().required().min(2, 'Please enter a valid flat type'),
	flatRent: number().min(10, 'Please enter a valid rent'),
	flatDeposit: number().min(1, 'Please enter a valid deposit'),
	tenantName: string().min(1, 'Please enter a valid name'),
	tenantPhoneNumber: string()
		.matches(/^[0-9]+$/, 'Please enter a valid phone number')
		.min(10, 'Phone number must contain 10 digits')
		.max(10, 'Phone number must contain 10 digits'),
});
