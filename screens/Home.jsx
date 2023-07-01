import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Animated,
} from "react-native";
import { COLORS, DATA, FONTS, SIZES } from "../constants";
import NFTCard from "../components/NFTCard";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  const [allData, setAllData] = useState(DATA);
  const moveSearchAnimation=useRef(new Animated.Value(0)).current;
  const searchAnimationHandler=()=>{
    Animated.spring(moveSearchAnimation,{
      toValue:1,
      friction:4,
      useNativeDriver:true,
    }).start();
  }
  const seacrchHandler = (value) => {
    // console.log(value);
    if (value) {
      const filteredData = DATA.filter((nft) =>
        nft.name.toLowerCase().includes(value.toLowerCase())
      );
      setAllData(filteredData);
    } else {
      setAllData(DATA);
    }
  };
  useEffect(()=>{
searchAnimationHandler();
  },[searchAnimationHandler]);
  const NotFoundNFT = () => {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notfoundText}>OOPs.....!</Text>
        <Text style={styles.notfoundText}>Not Found The NFT</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <Animated.View style={{
          top:-100,
          transform:[
            {
            translateY:moveSearchAnimation.interpolate({
              inputRange:[0,1],
              outputRange:[0,100],
            })
          }]
        }}>

        <HomeHeader seacrchHandler={seacrchHandler} />

        </Animated.View>

        {!allData.length ?(
          <NotFoundNFT/>
        ):(
          <FlatList
          data={allData}
          renderItem={({ item }) => <NFTCard NFTData={item} />}
          keyExtractor={(item) => item.id}
        />
        )}
      
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: 30,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xlarge,
  },
  notfoundText: {
    color: COLORS.darkblue,
    fontFamily:FONTS.italic,
    fontSize:SIZES.xlarge
  },
});

export default Home;
