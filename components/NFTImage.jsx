import React from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { COLORS } from "../constants";
import MainButton from "./MainButton";
import { AntDesign, Feather } from "@expo/vector-icons";
const NFTImage = ({ image, imageStyle, love, arrow, pressHandler }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyle} />
      {love && (
        <MainButton
          stylesButton={styles.buttonHeart}
          Icon={<AntDesign name="heart" size={20} color={COLORS.babypink} />}
        />
      )}
      {arrow && (
        <MainButton
          stylesButton={styles.arrowButton}
          Icon={
            <Feather
              name="arrow-left"
              size={20}
              color={COLORS.babypink}
              pressHandler={pressHandler && pressHandler}
            />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  buttonHeart: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    right: 10,
    padding: 10,
    borderRadius: 40,
    backgroundColor: COLORS.white,
  },
  arrowButton: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    right: 345,
    padding: 10,
    borderRadius: 40,
    backgroundColor: COLORS.white,
  },
});

export default NFTImage;
