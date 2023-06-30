import React from "react";
import { View, StyleSheet, Image } from "react-native";

const NFTAvatar = ({ avatars }) => {
  return (
    <View style={styles.container}>
      {avatars.map((avatar) => {
        return <Image
          key={avatar.id}
          source={avatar.image}
          resizeMode="contain"
          style={styles.avatar}
        />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    marginLeft: -5,
    borderRadius: 40,
  },
});

export default NFTAvatar;
