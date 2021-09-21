import React, { useCallback, useState } from 'react';
import { View, Image, Text, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import { DefaultButton, Header, Separator, Typography } from '../../components';
import useCharactersData from './hooks/useCharactersData';

// Generating dummy data
const DATA = Array.from({ length: 100 }, (v, i) => `List item ${i}`);

function CharacterScreen() {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { characters, loading, errorOccurred } = useCharactersData(refreshFlag);
  console.log(JSON.stringify({ characters }));
  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

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
            getItemLayout={(data, index) => ({
              length: DATA.length,
              offset: DATA.length * index,
              index,
            })}
            refreshing={loading}
            data={characters}
            renderItem={({ item }: { item: Character }) => {
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
