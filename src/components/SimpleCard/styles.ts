import { StyleSheet } from 'react-native';

// utils
import { colors } from '../../utils/theme';
import {  DEVICE_HEIGHT, DEVICE_WIDTH } from '../../utils/dimensions';


const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    height: DEVICE_HEIGHT * 0.28,
    margin: 5,
    width:  DEVICE_WIDTH * 0.4,
  },
  primary: { // p
    backgroundColor: colors.white,
    borderColor: colors.mainOrange,
  },
  secondary: { // p
    backgroundColor: colors.white,
    borderColor: colors.mainOrange,
  },
  image: {
    borderRadius: 20,
    height: DEVICE_HEIGHT * 0.2,
    width:  DEVICE_WIDTH * 0.4,
  },

});

export default styles;
