import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { replaceRoute } from '../../navigation/controls';

const goToMainTabs = async () => {
  try {
    await AsyncStorage.setItem('userLoggedInFlag', 'true');
    replaceRoute('TabNavigator');
  } catch (error) {
    console.log('Error storing userLoggedInFlag', error);
  }
};

const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome App Harry Potter
      </Typography>
      <Separator size={15} />
      <DefaultButton text="Enter books" textSize={16} onPress={goToMainTabs} />
      <Separator size={10} />
    </View>
  );
};

export default WelcomeScreen;
