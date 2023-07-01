import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../constants";

const NFTMoreinfo = ({ address, tokenId, tokenSt, blockchain }) => {
  return (
    <View>
      <View style={styles.details}>
        <Text style={styles.title}>Contract Address</Text>
        <Text style={styles.value}>{address}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Token ID</Text>
        <Text style={styles.value}>{tokenId}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Token Standerd</Text>
        <Text style={styles.value}>{tokenSt}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Block Chain</Text>
        <Text style={styles.value}>{blockchain}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderBottomWidth:1,
    borderBottomColor:COLORS.gray,
    marginVertical:SIZES.small-4
  },
  title: {color:COLORS.bg},
  value: {color:COLORS.babypink},

});

export default NFTMoreinfo;
