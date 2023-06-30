import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const MainButton = ({pressHandler,Icon,stylesText,title,stylesButton}) => {
  const RenderContent=()=>{
    if(!Icon)
    {
      return <Text style={stylesText}>{title && title}</Text>;
    }else{
      return Icon;
    }
  }
  return (
    <TouchableOpacity style={stylesButton} onPress={pressHandler && pressHandler}> 
      <RenderContent/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({})

export default MainButton;
