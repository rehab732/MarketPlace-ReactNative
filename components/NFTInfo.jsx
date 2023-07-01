import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import MainButton from "./MainButton";
import { Feather,MaterialCommunityIcons,AntDesign } from "@expo/vector-icons";
const NFTInfo = ({ comments, views, price, love }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Feather name="eye" size={20} style={{color:COLORS.darkblue}}></Feather>
        <Text style={styles.text}>{views}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons name="comment-text-outline" size={20} style={{color:COLORS.darkblue}}></MaterialCommunityIcons>
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons name="ethereum" size={20} style={{color:COLORS.darkblue}}></MaterialCommunityIcons>
        <Text style={styles.text}>{price}</Text>
      </View>
      {love && <View>
        <MainButton
        stylesButton={styles.buttonHeart}
        Icon={<AntDesign name="heart" size={18} color={COLORS.darkblue}/>}
        />
        </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
    width: 90,
    borderRadius: SIZES.xlarge,
    paddingVertical: 3,
    gap: 4,
    borderWidth:1,
    borderColor:COLORS.babypink

  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.darkblue,
  },
  buttonHeart:{
    backgroundColor:COLORS.bg,
    padding:5,
    borderRadius:20,
    borderWidth:1,
    borderColor:COLORS.babypink
  }
});

export default NFTInfo;
