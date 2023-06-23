import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {useFonts} from 'expo-font';

export default function App() {

const[fontsLoaded]=useFonts({
  'Inter-Bold':require('./assets/fonts/Inter-Bold.ttf'),
  'Inter-Italic':require('./assets/fonts/Inter-Italic.ttf'),
  'Inter-Light':require('./assets/fonts/Inter-Light.ttf'),
  'Inter-Medium':require('./assets/fonts/Inter-Medium.ttf'),
  'Inter-Reqular':require('./assets/fonts/Inter-Regular.ttf'),
  'Inter-SemiBold':require('./assets/fonts/Inter-SemiBold.ttf'),


});
if(!fontsLoaded) return null;
  return (
    <View>
      <StatusBar style="light" animated={true} />
      <Text style={{fontFamily:'Inter-Italic' , fontSize:40}}>Text Test</Text>
    </View>
  );
}

