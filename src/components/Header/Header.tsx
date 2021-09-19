import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import { goBack } from '../../navigation/controls';
import { Separator, Typography } from '..';
import { colors } from '../../utils/theme';

interface Props {
  onPressBackButton?: () => void;
  onPressRightButton?: () => void;
  RightSideComponent?: React.FC;
  showBackButton?: boolean;
  title: string;
}

const Header = ({
  onPressBackButton,
  onPressRightButton,
  RightSideComponent,
  showBackButton,
  title,
}: Props) => {
  return (
    <>
      <SafeAreaView edges={['top']} />
      <View style={styles.mainContainer}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('../../assets/img/harrypotter.png')}
        />
        {showBackButton ? (
          <TouchableOpacity onPress={onPressBackButton} style={styles.sideButtonContainer}>
            <MaterialIcon name="navigate-before" size={35} color={colors.black} />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
        <View style={styles.titleContainer}>
          <Typography align="center" numberOfLines={2} variant="bold" size={17}>
            {title}
          </Typography>
        </View>
        {RightSideComponent ? (
          <TouchableOpacity onPress={onPressRightButton} style={styles.sideButtonContainer}>
            <RightSideComponent />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
      </View>
    </>
  );
};

Header.defaultProps = {
  onPressBackButton: goBack,
  onPressRightButton: () => {},
  showBackButton: true,
};

export default Header;
