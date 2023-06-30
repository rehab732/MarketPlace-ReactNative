import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const NFTDate = ({date}) => {
  return (
    <View>
      <Text style={styles.textDate}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textDate:{
    fontFamily:FONTS.semiBold,
    fontSize:SIZES.medium,
    color:COLORS.second
  }
})

export default NFTDate;
