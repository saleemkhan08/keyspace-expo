import { string, object } from 'yup';
import { TEXT, SINGLE_SELECT } from '../constants';

export const AccountInfoSchema = object({
	name: string()
		.required('Name is required')
		.min(3, 'Please enter a valid name'),
	phoneNumber: string()
		.required('Phone number is required')
		.matches(/^[0-9]+$/, 'Please enter a valid phone number')
		.min(10, 'Phone number must contain 10 digits')
		.max(10, 'Phone number must contain 10 digits'),
	email: string().required('Email is required').email(),
	accountType: string().oneOf(
		['propertyOwner', 'tenant', 'pgOwner', 'guest'],
		'Please select atleast one option'
	),
});

export const accountInfoFormConfig = ({ errors, control }) => [
	{
		name: 'name',
		errorMessage: errors?.name?.message,
		label: 'Full Name',
		placeholder: 'Enter your full name',
		control,
		type: TEXT,
	},
	{
		name: 'phoneNumber',
		errorMessage: errors?.phoneNumber?.message,
		label: 'Phone Number',
		placeholder: 'Enter your phone number',
		control,
		type: TEXT,
	},
	{
		name: 'email',
		errorMessage: errors?.email?.message,
		label: 'Email',
		placeholder: 'Enter your email address',
		control,
		type: TEXT,
	},
	{
		name: 'accountType',
		errorMessage: errors?.accountType?.message,
		label: 'Account Type',
		options: [
			{ text: 'Property Owner', id: 'propertyOwner' },
			{ text: 'PG Owner', id: 'pgOwner' },
			{ text: 'Tenant', id: 'tenant' },
			{ text: 'Paying Guest', id: 'guest' },
		],
		control,
		vertical: true,
		type: SINGLE_SELECT,
	},
];
