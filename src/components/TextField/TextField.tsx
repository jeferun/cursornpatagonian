import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

interface Props {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
}

const TextField = ({ placeholder, value, onChange }: Props) => (
  <View style={styles.mainContainer}>
    <TextInput
      allowFontScaling={false}
      autoCapitalize="none"
      autoCorrect={false}
      // editable={false}
      // keyboardType="numeric"
      placeholder={placeholder}
      value={value}
      // onChangeText={(text) => setInputText(text)}
      onChangeText={onChange}
      style={styles.textInput}
    />
  </View>
);

/* TextField.defaultProps = {
  onPressSecondaryButton: null,
  secondaryButtonText: '',
}; */

export default TextField;
