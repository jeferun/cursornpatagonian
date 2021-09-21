import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: .5,
    width: '90%',
  },
  textInput: {
    backgroundColor: colors.yellow,
    color: colors.maroon,
    flex: .9,
    height: 40,
    paddingHorizontal: 15,
  },
});

export default styles;
