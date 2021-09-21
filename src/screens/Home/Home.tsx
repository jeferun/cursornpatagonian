import React, { useCallback, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useSelector, useDispatch } from 'react-redux';

// type state
import { RootState } from '../../reducers';

// component
import { DefaultButton, Header, Separator, SimpleCard, TextField, Typography } from '../../components';
import styles from './styles';

// config
import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';

// redux    transform: [{translateY: -110}]
import { getBooks } from '../../reducers/book';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

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
    dispatch(getBooks());
  }, []);

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  const setInputText = (text: string) => console.log({ text });

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
        <TextField
          placeholder='Consultar'
          value=''
          onChange={setInputText}
        />
        <Typography size={18} color={colors.mainOrange} variant='bold'>BOOKS</Typography>
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
