import React from 'react';
import { View, ScrollView } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { SINGLE_SELECT, TEXT } from '../../constants';
import ControllerInput from './ControllerInput';
import TypePicker from './TypePicker';
import TextButton from './TextButton';
import PageStyles from '../../reactNativeStyles/page';

const GenericForm = ({
	config,
	onSubmit,
	submitTitle,
	schema,
	defaultValues,
}) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues,
	});
	const configList = config({ errors, control });
	return (
		<ScrollView style={PageStyles.scrollViewContainer}>
			<View style={PageStyles.container}>
				{configList?.map((item) => {
					switch (item.type) {
						case TEXT: {
							return <ControllerInput {...item} key={item.name} />;
						}
						case SINGLE_SELECT: {
							return <TypePicker {...item} key={item.name} />;
						}
						default:
							return null;
					}
				})}
				<TextButton title={submitTitle} onPress={handleSubmit(onSubmit)} />
			</View>
		</ScrollView>
	);
};

export default GenericForm;
