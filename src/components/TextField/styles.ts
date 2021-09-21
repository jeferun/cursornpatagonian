import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 15,
    width: '90%',
  },
});

export default styles;
