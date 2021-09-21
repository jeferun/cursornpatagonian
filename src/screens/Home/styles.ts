import { StyleSheet } from 'react-native';

// utils 
import { colors } from '../../utils/theme';


const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor: colors.bone,
    borderRadius: 30,
    paddingVertical: 2,
    height: '84%',
    width: '94%',
  },
  flatList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  flatlistContent: {
    alignItems: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.app,
    flex: 1,
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
