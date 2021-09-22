import React from 'react';
import { View } from 'react-native';

import { Header, Typography } from '../../components';
import styles from './styles';

const HistoryScreen = () => {
  return (
    <>
      <Header showBackButton={false} title="History" />
      <View style={styles.mainContainer}>
        <Typography size={18}>History Screen</Typography>
      </View>
    </>
  );
};

export default HistoryScreen;
