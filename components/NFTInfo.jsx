import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import MainButton from "./MainButton";
import { Feather,MaterialCommunityIcons,AntDesign } from "@expo/vector-icons";
const NFTInfo = ({ comments, views, price, love }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Feather name="eye" size={20} color="white"></Feather>
        <Text style={styles.text}>{views}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons name="comment-text-outline" size={20} color="white"></MaterialCommunityIcons>
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons name="ethereum" size={20} color="white"></MaterialCommunityIcons>
        <Text style={styles.text}>{price}</Text>
      </View>
      {love && <View>
        <MainButton
        stylesButton={styles.buttonHeart}
        Icon={<AntDesign name="heart" size={18} color={COLORS.second}/>}
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
    backgroundColor: COLORS.second,
    width: 90,
    borderRadius: SIZES.xlarge,
    paddingVertical: 3,
    gap: 4,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  buttonHeart:{
    backgroundColor:COLORS.bg,
    padding:5,
    borderRadius:20,
    borderWidth:1,
    borderColor:COLORS.second
  }
});

export default NFTInfo;
