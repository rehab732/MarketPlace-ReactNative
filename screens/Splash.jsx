import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated,SafeAreaView } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import nft11 from "../assets/images/nft11.jpg";
import nft09 from "../assets/images/nft09.jpg";
import nft06 from "../assets/images/nft06.jpg";
import Button from "../components/MainButton";
import { useNavigation } from "@react-navigation/native";
const Splash = () => {
  const navigation = useNavigation();
  const fadeImageAnimation = useRef(new Animated.Value(0)).current;
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;
  const moveButtonAnimation = useRef(new Animated.Value(1)).current;

  const moveImageAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 100 })
  ).current;

  const imagesAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImageAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),

      Animated.spring(moveImageAnimation, {
        toValue: { x: 0, y: 0 },
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const textAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 1300,
      useNativeDriver: true,
    }).start();
  };
  const buttonAnimationHandler = () => {
    Animated.spring(moveButtonAnimation, {
      toValue: 0,
      friction: 4,
      delay: 1300,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    imagesAnimationHandler(), textAnimationHandler(), buttonAnimationHandler();
  }, [imagesAnimationHandler, textAnimationHandler, buttonAnimationHandler]);

  const pressHandler = () => {
    // console.log("pressed");
    navigation.navigate("Home");
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.imagecontainer,
          {
            opacity: fadeImageAnimation,
            transform: moveImageAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View style={styles.imagecard}>
          <Image style={styles.image} source={nft06} />
        </View>
        <View style={[styles.imagecard, { top: SIZES.medium + 20 }]}>
          <Image style={styles.image} source={nft09} />
        </View>
        <View style={styles.imagecard}>
          <Image style={styles.image} source={nft11} />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.textcontainer,
          {
            opacity: fadeTextAnimation,
          },
        ]}
      >
        <Text style={styles.maintext}>Find Your Amazing NFTs</Text>
        <Text style={styles.subtext}>
          Explore the top collection of NFTs and buy and sell your NFTs as well
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
           transform:[{
            translateY:moveButtonAnimation.interpolate({
              inputRange:[0,1],
              outputRange:[0,200]
            })
           }]
          },
        ]}
      >
        <Button
          title="Get Started"
          pressHandler={pressHandler}
          stylesButton={styles.button}
          stylesText={styles.textButton}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small + 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  imagecontainer: {
    top: -SIZES.medium,
    flexDirection: "row",
    gap: SIZES.small,
  },
  image: {
    width: 200,
    height: 200,
  },
  imagecard: {
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.secondtwo,
  },
  textcontainer: {
    margin: SIZES.small,
    padding: SIZES.small,
    marginVertical: SIZES.xlarge + 6,
  },
  maintext: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xlarge + 5,
    textAlign: "center",
    color: COLORS.white,
  },
  subtext: {
    fontFamily: FONTS.light,
    textAlign: "center",
    marginTop: SIZES.large,
    color: COLORS.gray,
  },
  buttonContainer: {
    position: "absolute",
    bottom: SIZES.xlarge + 10,
    marginVertical: SIZES.xlarge,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 4,
    width: 240,
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  textButton: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
  },
});

export default Splash;
