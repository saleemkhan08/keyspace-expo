import React from 'react';
import { SafeAreaView } from 'react-native';
import {
	BankDetailsSchema,
	bankDetailsFormConfig,
} from '@keyspace/common/schema';
import PageStyles from '@keyspace/common/reactNativeStyles/page';
import GenericForm from '@keyspace/common/reactNative/components/GenericForm';

const AccountInfoForm = () => {
	const saveData = (values) => {
		// TODO save data
		console.log('SalValue : >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', {
			values,
		});
	};

	return (
		<SafeAreaView style={PageStyles.safeAreaContainer}>
			<GenericForm
				config={bankDetailsFormConfig}
				onSubmit={saveData}
				submitTitle='Save'
				schema={BankDetailsSchema}
				defaultValues={{}}
			/>
		</SafeAreaView>
	);
};

export default AccountInfoForm;
