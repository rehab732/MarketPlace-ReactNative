import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import NFTImage from "./NFTImage";
import NFTAvatar from "./NFTAvatar";
import NFTTitle from "./NFTTitle";
import NFTInfo from "./NFTInfo";
import { useNavigation } from "@react-navigation/native";

const NFTCard = ({ NFTData }) => {
  const navigation=useNavigation();
  const pressHandler=()=>{
    navigation.navigate("Details",{NFTData});
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={pressHandler}>
        <NFTImage image={NFTData.image} imageStyle={styles.imageStyle} />
      </TouchableOpacity>
      <View style={styles.cardTop}>
        <NFTAvatar avatars={NFTData.avatars} />
      </View>
      <View style={styles.cardBottom}>
        
        <NFTTitle
          _name={NFTData.name}
          creator={NFTData.creator}
          date={NFTData.date}
        />
        <View style={{ marginTop: SIZES.small + 5 }}>
          <NFTInfo 
          comments={NFTData.comments}
          views={NFTData.views}
          price={NFTData.price}
          love
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkblue,
    marginBottom: SIZES.xlarge,
    marginVertical: SIZES.small,
    marginHorizontal: 14,
    padding: 12,
    borderRadius: 20,
  },
  cardTop: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
    marginTop: -30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottom: {
    width: "100%",
    padding: SIZES.medium,
  },
  imageStyle: {
    width: "100%",
    height: 300,
    borderRadius: 30,
  },
});

export default NFTCard;
