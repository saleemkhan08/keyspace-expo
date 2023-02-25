import { string, object } from 'yup';
import { TEXT } from '../constants';

export const BankDetailsSchema = object({
	accountHolderName: string()
		.required('Name is required')
		.min(3, 'Please enter a valid name'),
	accountNumber: string()
		.required('Account Number is Required')
		.matches(/[0-9]{9,18}/, 'Please enter a valid account number')
		.min(9, 'Account number must contain atleast 9 characters')
		.max(18, 'Account number must not contain more than 18 characters'),
	ifsc: string()
		.required('IFSC is required')
		.matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Please enter a valid IFSC')
		.min(11, 'IFSC must contain 11 Characters')
		.max(10, 'IFSC must contain 11 Characters'),
	communicationAddress: string()
		.required('Address is required')
		.min(6, 'Please enter a valid address'),
	pan: string()
		.required('PAN is required')
		.matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Please enter a valid PAN number')
		.min(10, 'PAN number must contain 10 Characters')
		.max(10, 'PAN number must contain 10 Characters'),
});

export const bankDetailsFormConfig = ({ errors, control }) => [
	{
		name: 'accountHolderName',
		errorMessage: errors?.accountHolderName?.message,
		label: 'Account Holder Name',
		placeholder: 'Enter your full name',
		control,
		type: TEXT,
	},
	{
		name: 'accountNumber',
		errorMessage: errors?.accountNumber?.message,
		label: 'Account Number',
		placeholder: 'Enter your account number',
		control,
		type: TEXT,
	},
	{
		name: 'ifsc',
		errorMessage: errors?.ifsc?.message,
		label: 'IFSC',
		placeholder: 'Enter your IFSC',
		control,
		type: TEXT,
	},
	{
		name: 'communicationAddress',
		errorMessage: errors?.communicationAddress?.message,
		label: 'Communication Address',
		placeholder: 'Enter your address',
		control,
		type: TEXT,
		maxLength: 1000,
		multiline: true,
		numberOfLines: 3,
	},
	{
		name: 'pan',
		errorMessage: errors?.pan?.message,
		label: 'PAN',
		placeholder: 'Enter your PAN',
		control,
		type: TEXT,
	},
];
