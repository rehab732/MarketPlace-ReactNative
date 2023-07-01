import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS, DATA, FONTS, SIZES } from "../constants";
import NFTImage from "../components/NFTImage";
import NFTAvatar from "../components/NFTAvatar";
import NFTTitle from "../components/NFTTitle";
import NFTInfo from "../components/NFTInfo";
import NFTMoreinfo from "../components/NFTMoreinfo";
import {FontAwesome} from '@expo/vector-icons'
import MainButton from "../components/MainButton";
const Details = ({ route, navigation }) => {
  const { NFTData } = route.params;
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <NFTImage
          image={NFTData.image}
          imageStyle={styles.imageStyle}
          love
          arrow
          pressHandler={pressHandler}
        />

        <View style={{ paddingHorizontal: SIZES.xlarge }}>
          <View style={{ marginTop: -SIZES.xlarge }}>
            <NFTAvatar avatars={NFTData.avatars} />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTTitle
              _name={NFTData.name}
              creator={NFTData.creator}
              date={NFTData.date}
            />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTInfo
              price={NFTData.price}
              comments={NFTData.comments}
              views={NFTData.views}
            />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTMoreinfo
              address={NFTData.address}
              tokenId={NFTData.tokenId}
              blockchain={NFTData.blockchain}
              tokenSt={NFTData.tokenSt}
            />
          </View>
        </View>
        <View style={{paddingHorizontal:75,paddingTop:20}}>
          <MainButton title="Explore..!" stylesButton={styles.button} stylesText={styles.textButton}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkblue,
  },
  header: {
    width: "100%",
    marginTop: -20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageStyle: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  buttonContainer:{
    width:"100%",
    position:"absolute",
    bottom:SIZES.small,
    justifyContent:"center",
    alignItems:"center",
    zIndex:1
  },
  button: {
    backgroundColor: COLORS.bg,
    padding: SIZES.small + 4,
    width: 240,
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  textButton: {
    color: COLORS.darkblue,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
  },
  wrapper:{
    backgroundColor:COLORS.second,
    width:300,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:20,
    borderRadius:20,
    position:"absolute",
    top:SIZES.small,


    
  },
  text:{
    fontSize:SIZES.medium,
    fontFamily:FONTS.semiBold,
    color:COLORS.bg
  }
});

export default Details;
