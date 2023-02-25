import { string, object } from 'yup';

export default object({
	name: string().required().min(3, 'Please enter a valid name'),
	address: string().required().min(6, 'Please enter a valid address'),
});
