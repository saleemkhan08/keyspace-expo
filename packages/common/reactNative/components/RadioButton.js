/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { colors } from '../../constants';

const styles = StyleSheet.create({
  outerView: {
    height: 32,
    width: 32,
    borderWidth: 4,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fill: {
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
  },
});

const RadioButton = ({style, onChange, isSelected, iconColor, backgroundColor, children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange && onChange(!isSelected)}>
      <View style={[styles.outerView, {borderColor: backgroundColor}, style]}>
        {isSelected && (
          <View style={[styles.fill, {backgroundColor}]}>
            {children ? (
              children
            ) : (
              <FontAwesome style={styles.icon} name="check" color={iconColor} />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

RadioButton.defaultProps = {
  backgroundColor: colors.darkBlue,
  iconColor: colors.white,
};

export default RadioButton;
