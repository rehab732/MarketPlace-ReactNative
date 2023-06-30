import React from 'react';
import {View, StyleSheet,Image} from 'react-native';

const NFTImage = ({image,imageStyle}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    position:"relative"
  }
})

export default NFTImage;
