import { string, object } from 'yup';

export const phoneNumberSchema = object({
	phoneNumber: string()
		.required()
		.matches(/^[0-9]+$/, 'Please enter a valid phone number')
		.min(10, 'Phone number must contain 10 digits')
		.max(10, 'Phone number must contain 10 digits'),
});

export const otpSchema = object({
	otp: string()
		.required()
		.matches(/^[0-9]+$/, 'Please enter a valid OTP')
		.min(6, 'OTP must contain 6 digits')
		.max(6, 'OTP must contain 6 digits'),
});
