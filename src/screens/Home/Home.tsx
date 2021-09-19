import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultButton, Header, Separator, SimpleCard, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useBooksData from './hooks/useBooksData';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <SimpleCard
    text={item.title}
    uri={item.book_covers[0].URL}
    onPress={() => goToScreen('BookDetails', { id: item.id, title: item.title })}
  />
);

function HomeScreen() {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { books, loading, errorOccurred } = useBooksData(refreshFlag);

  const netInfo = useNetInfo();

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
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>An unknown error occurred :'(</Typography>
        <Separator size={15} />
        <DefaultButton text="Retry" onPress={toggleRefreshFlag} />
      </View>
    );
  }

  return (
    <>
      <Header showBackButton={false} title="" />
      <View style={styles.mainContainer}>
        <Separator size={20} />
        <DefaultButton text="Go To Experimental Screen" onPress={goToExperimentalScreen} />
        <Separator size={20} />
        <View style={styles.bookContainer}>
          <FlatList
            keyExtractor={flatlistKeyExtractor}
            refreshing={loading}
            onRefresh={toggleRefreshFlag}
            data={books}
            horizontal={false}
            numColumns={2}
            renderItem={renderFlatlistItem}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.flatlistContent}
            style={styles.flatList}
          />
        </View>
      </View>
    </>
  );
}

export default HomeScreen;
