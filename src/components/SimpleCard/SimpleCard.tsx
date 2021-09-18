import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
// styles
import styles from './styles';
// theme
import { colors } from '../../utils/theme';
// component
import Typography from '../Typography';
import Separator from '../Separator';

// interface
interface Props {
  onPress: () => void;
  text: string;
  uri: string;
  variant?: 'primary' | 'secondary';
}

function SimpleCard({ onPress, text, uri, variant = 'primary' }: Props) {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, styles[variant]]}
      onPress={onPress}
    >
      <Image
        style={styles.image}
        source={{ uri }}
      />
      <Separator />
      <Typography
        align='center'
        color={colors.black}
        numberOfLines={2}
        size={14}
        variant="medium"
      >
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

SimpleCard.defaultProps = {
  variant: 'primary',
};

export default SimpleCard;
