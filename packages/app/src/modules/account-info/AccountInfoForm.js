import React from 'react';
import { SafeAreaView } from 'react-native';
import {
	AccountInfoSchema,
	accountInfoFormConfig,
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
				config={accountInfoFormConfig}
				onSubmit={saveData}
				submitTitle='Save'
				schema={AccountInfoSchema}
				defaultValues={{}}
			/>
		</SafeAreaView>
	);
};

export default AccountInfoForm;
