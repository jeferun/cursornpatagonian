import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, Text, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import { DefaultButton, Header, Separator, Typography } from '../../components';
import { useSelector, useDispatch } from 'react-redux';

// type state
import { RootState } from '../../reducers';

import { getCharacters } from '../../reducers/characters';
import { useNetInfo } from '@react-native-community/netinfo';
import { colors } from '../../utils/theme';

function CharacterScreen() {
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { characters, loading, errorOccurred } = useSelector<RootState, ICharacterState>(
    (state) => state.character,
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

  if (loading) {
    return (
      <>
        <Header showBackButton={false} title="Home Screen" />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

  if (errorOccurred) {
    return (
      <View>
        <Typography size={20}>An unknown error occurred :'(</Typography>
        <Separator size={15} />
        <DefaultButton text="Retry" onPress={toggleRefreshFlag} />
      </View>
    );
  }

  return (
    <>
      <Header title="" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <FlatList
            refreshing={loading}
            data={characters}
            renderItem={({ item }: { item: ICharacter }) => {
              return (
                <View style={styles.listItem}>
                  <Image
                    style={styles.image}
                    source={require('../../assets/img/harrypotter.png')}
                  />
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default CharacterScreen;
