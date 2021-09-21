import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// theme
import { colors } from '../../utils/theme';

import styles from './styles';

interface Props {
  placeholder: string;
  onPressIcon: (text: string) => void;
}

function TextField({ placeholder, onPressIcon }: Props) {

  const [search, setSearch] = useState<string>(''); // p*

  const setInputText = (text: string) => setSearch(text);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => onPressIcon(search)}>
        <MaterialIcon name="search" size={30} color={colors.maroon} />
      </TouchableOpacity>
      <TextInput
        allowFontScaling={false}
        autoCapitalize="none"
        autoCorrect={false}
        // editable={false}
        // keyboardType="numeric"
        placeholder={placeholder}
        placeholderTextColor={colors.maroon}
        onBlur={() => onPressIcon(search)}
        value={search}
        onChangeText={setInputText}
        style={styles.textInput}
      />
    </View>
  );
}

/* TextField.defaultProps = {
  onPressSecondaryButton: null,
  secondaryButtonText: '',
}; */

export default TextField;
