import { string, number, object } from 'yup';

export default object({
	doorNo: string().required().min(1, 'Please enter a valid door number'),
	flatAddress: string().min(6, 'Please enter a valid address'),
	moveInDate: string()
		.min(10, 'Please enter a valid date')
		.max(10, 'Please enter a valid date'),
	tenureDuration: number().min(1, 'Please enter a valid duration'),
	flatDeposit: number().min(1, 'Please enter a valid deposit'),
	flatRent: number().min(10, 'Please enter a valid rent'),
	maintenance: number().min(10, 'Please enter a valid rent'),
	noticePeriod: number().min(10, 'Please enter a valid rent'),
	additionalTerms: string(),
});
