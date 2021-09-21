import React, { useCallback, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useSelector, useDispatch } from 'react-redux';

// type state
import { RootState } from '../../reducers';

// component
import { DefaultButton, Header, SearchField, Separator, SimpleCard, Typography } from '../../components';
import styles from './styles';

// config
import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';

// get data
import { getBooksAction } from '../../reducers/book';

const flatlistKeyExtractor = (item: IBook) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: IBook }) => (
  <SimpleCard
    text={item.title}
    uri={item.book_covers[0].URL}
    onPress={() => goToScreen('BookDetails', { id: item.id, title: item.title })}
  />
);

function HomeScreen() {
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { books, loading, errorOccurred } = useSelector<RootState, IBookState>(
    (state) => state.book
  );

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);

  const toggleRefreshFlag = useCallback(() => {
    dispatch(getBooksAction());
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  const handleOnPress = useCallback((text) => { // p*
    dispatch(getBooksAction(text));
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
        <Typography size={20}>{errorOccurred}</Typography>
        <Separator size={15} />
        <DefaultButton text="Retry" onPress={toggleRefreshFlag} />
      </View>
    );
  }

  return (
    <>
      <Header showBackButton={false} title="" />
      <View style={styles.mainContainer}>
        <Separator size={10} />
        <SearchField
          placeholder='Search a book'
          onPressIcon={handleOnPress}
        />
        <Typography size={20} color={colors.maroon} variant='bold'>BOOKS</Typography>
        <Separator size={10} />
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
