import React from 'react';
import {View, StyleSheet,Image,Text, TextInput} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import avatar from '../assets/images/avatars/avatar04.jpg';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
const HomeHeader = ({seacrchHandler}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image 
          source={avatar}
          resizeMode="contain"
          style={{width:44,height:44,borderRadius:30}}
          />
        </View>
        <View>
          <View style={{flexDirection:"row",alignItems:"center",gap:3}}>
            <Text style={styles.userText}>Rehab Mohamed</Text>
            <MaterialCommunityIcons 
            name='check-decagram'
            size={24}
            style={{color:COLORS.darkblue}}
            />
          </View>
          <View>
            <Text style={{color:COLORS.darkblue}}>Creator</Text>
          </View>
        </View>
      </View>
       <View style={{marginTop:SIZES.small,paddingHorizontal:10}}>
          <View style={styles.searchContainer}>
            <AntDesign name="search1" size={24} style={{color:COLORS.babypink}}/>
            <TextInput
             placeholder={"      Search By Name..!"}
             placeholderTextColor={COLORS.babypink}
             style={{flex:1,color:COLORS.white}}
             onChangeText={seacrchHandler}
             
             />
          </View>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:SIZES.small
  },
  header:{
    flexDirection:"row",
    alignItems:"center",
    gap:16,
    paddingHorizontal:10
  },
  userText:{
    color:COLORS.darkblue,
    fontFamily:FONTS.semiBold,
    fontSize:SIZES.xlarge,
  },
  searchContainer:{
    width:"100%",
    borderRadius:SIZES.small,
    backgroundColor:COLORS.darkblue,
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:8,
    paddingHorizontal:10,
    marginVertical:30
  }
})

export default HomeHeader;
