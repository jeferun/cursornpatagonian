import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
  onChange: () => void;
}

const TextField = ({ text, onChange }: Props) => (
  <View style={styles.mainContainer}>
    <TextInput
      allowFontScaling={false}
      autoCapitalize="none"
      autoCorrect={false}
      // editable={false}
      // keyboardType="numeric"
      placeholder="Write something..."
      value={text}
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
