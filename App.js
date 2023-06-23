import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcom from './screens/Welcom';
import Home from './screens/Home';
import Details from './screens/Details';
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
const Stack=createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcom' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Welcom' component={Welcom}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

