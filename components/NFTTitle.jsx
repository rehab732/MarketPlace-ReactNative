import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NFTDate from "./NFTDate";

const NFTTitle = ({ _name, creator, date }) => {
  return (
    <View>
      <View>
        <Text style={styles.textName}>{_name}</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",alignItems:"center",gap:SIZES.small}}>
          <Text style={styles.textCreator}>{creator}</Text>
          {/* <Text>Icon</Text> */}
          <MaterialCommunityIcons name="check-decagram" size={24} style={{color:COLORS.bg}} />
        </View>
        <View>
          <NFTDate date={date}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textName: {
    color: COLORS.bg,
    fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  textCreator: {
    color: COLORS.bg,
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
});

export default NFTTitle;
