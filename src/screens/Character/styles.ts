import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
    flex: 1,
    width: '100%',
  },
  container: {
    padding: 16,
    paddingTop: 50,
    width: '100%',
  },
  listItem: {
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#333',
    flex: 1,
    flexDirection: 'row',
    marginTop: 3,
  },
  image: {
    borderRadius: 20,
    height: 50,
    width: '20%',
  },
  text: {
    color: '#000',
    textAlignVertical: 'center',
    padding: 10,
    width: '80%',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
